var gulp = require('gulp'),
	fs = require('fs')
	debug = require('gulp-debug'),
	gulpData = require('gulp-data'),
	nunjucks = require('gulp-nunjucks');

require('./tasks/pre-process');
require('./tasks/scripts');
require('./tasks/del');
require('./tasks/templates');
require('./tasks/browser-sync');

gulp.task('build', ['build-css', 'build-js']);
gulp.task('serve', ['build', 'browser-sync']);



var markdown = require('gulp-markdown');
 
gulp.task('docs', function () {
	return gulp.src('./docs/*.md')
		.pipe(markdown())
		.pipe(gulp.dest('./public'));
}); 



var marked = require('marked');


gulp.task('patterns', function () {
	var data = {
			"patterns": []
	};

	fs.readdirSync('./patterns/').forEach(function (path) {
		data.patterns.push({
			name: path,
			mdToHtml: marked(fs.readFileSync('./patterns/' + path + '/' + path + '.md', 'utf8')),
			example: fs.readFileSync('./patterns/' + path + '/' + path + '.html'),
			code: fs.readFileSync('./patterns/' + path + '/' + path + '.html')
		});
	});

	return gulp.src('./src/templates/base.html')
		.pipe(gulpData(function () { return data; }))
		.pipe(nunjucks.compile({data: data}))
		.pipe(gulp.dest('public'));


	console.log(data);
});