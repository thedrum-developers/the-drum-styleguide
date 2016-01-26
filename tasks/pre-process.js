var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	size = require('gulp-size');


gulp.task('pre-process',['del'], function(){
  return gulp.src(['./scss/sg-styles.scss', './scss/pattern-styles.scss'])
		.pipe(sass())
		.pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
		.pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
		.pipe(prefix())
		.pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
		.pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))
		.pipe(gulp.dest('./public/css/'))
});
