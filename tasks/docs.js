// var gulp = require('gulp'),
 
var gulp = require('gulp'),
	markdown = require('gulp-markdown');
	gulpData = require('gulp-data'),
	nunjucksRender = require('gulp-nunjucks-render'),
	insert = require('gulp-insert');

nunjucksRender.nunjucks.configure(['src/templates/','src/templates/partials/']);

gulp.task('docs', function () {
return gulp.src('./docs/*.md')
		.pipe(markdown())
		.pipe(insert.prepend('{% extends "_docs.html" %}{% block mainDocs %}'))
		.pipe(insert.append('{% endblock %}'))
		.pipe(nunjucksRender())
		.pipe(gulp.dest('public'));
}); 
