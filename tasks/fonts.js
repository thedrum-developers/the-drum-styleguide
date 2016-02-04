var gulp = require('gulp');

gulp.task('build-fonts', function () {

    return gulp.src(['./src/assets/fonts/*.eot', './src/assets/fonts/*.ttf', './src/assets/fonts/*.woff', './src/assets/fonts/*.woff2'])
      .pipe(gulp.dest('./public/fonts'));   

});