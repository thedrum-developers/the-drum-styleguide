var gulp = require('gulp'),
	marked = require('marked'),
	fs = require('fs'),
	gulpData = require('gulp-data'),
	nunjucksRender = require('gulp-nunjucks-render'),
	rename = require("gulp-rename");


gulp.task('patterns', function () {
	var data = {
			"patterns": []
	};

	fs.readdirSync('./patterns/').forEach(function (path) {
		data.patterns.push({
			name: path,
			mdToHtml: marked(fs.readFileSync('./patterns/' + path + '/' + path + '.md', 'utf8')),
			example: fs.readFileSync('./patterns/' + path + '/' + path + '.html'),
			code: fs.readFileSync('./patterns/' + path + '/' + path + '.html').toString()
		});
	});

nunjucksRender.nunjucks.configure(['src/templates/','src/templates/partials/']);

	return gulp.src('./src/templates/partials/_patterns.html')
		.pipe(gulpData(function () { return data; }))
		.pipe(nunjucksRender())
		.pipe(rename('index.html'))
		.pipe(gulp.dest('public'));

});
