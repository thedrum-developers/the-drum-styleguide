var gulp = require('gulp'),
	markdown = require('gulp-markdown');
 
gulp.task('docs', function () {
	return gulp.src('./docs/*.md')
		.pipe(markdown())
		.pipe(gulp.dest('./public'));
}); 
