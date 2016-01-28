var gulp = require('gulp'),
    concat = require("gulp-concat");


gulp.task('build-patterns-js', function () {

    gulp.src(['./patterns/**/*.js'])
      .pipe(concat("pattern-scripts.js"))
      .pipe(gulp.dest('./public/js'));

});

gulp.task('build-sg-scripts', function () {

    gulp.src(['./src/js/sg-scripts.js'])
      .pipe(gulp.dest('./public/js'));

});


gulp.task('build-js', ['build-patterns-js', 'build-sg-scripts']);
