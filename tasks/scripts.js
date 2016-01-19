var gulp = require('gulp'),
    concat = require("gulp-concat");

gulp.task('scripts-patterns', function () {

    gulp.src(['./js/patterns/*.js'])
      .pipe(concat("pattern-scripts.js"))
      .pipe(gulp.dest('./public/js'));

});

gulp.task('scripts-sg', function () {

    gulp.src(['./js/sg-scripts.js'])
      .pipe(gulp.dest('./public/js'));

});


gulp.task('scripts', ['scripts-sg', 'scripts-patterns']);
