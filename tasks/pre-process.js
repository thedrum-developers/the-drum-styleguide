var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	concat = require("gulp-concat"),
	size = require('gulp-size'),
	bulkSass = require('gulp-sass-bulk-import');


gulp.task('build-patterns-css', function(){

	return gulp.src('./src/scss/pattern-styles.scss')
		.pipe(bulkSass())
		.pipe(sass())
		.pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
		.pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
		.pipe(prefix())
		.pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
		.pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))
		.pipe(gulp.dest('./public/css/'));

});


gulp.task('build-sg-css', function(){
	return gulp.src('./src/scss/sg-styles.scss')
		.pipe(sass())
		.pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
		.pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
		.pipe(prefix())
		.pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
		.pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))
		.pipe(gulp.dest('./public/css/'));

});


gulp.task('build-css',['del', 'build-patterns-css', 'build-sg-css']);


