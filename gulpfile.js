var gulp = require('gulp');

require('./tasks/pre-process');
require('./tasks/scripts');
require('./tasks/del');
require('./tasks/patterns');
require('./tasks/images');
require('./tasks/docs');
require('./tasks/browser-sync');
require('./tasks/fonts');

gulp.task('build', ['build-css', 'build-js', 'docs', 'patterns', 'build-images', 'build-fonts']);

gulp.task('serve', ['bs-reload', 'browser-sync'], function(){

  gulp.watch('./src/scss/**/*.scss', ['build-patterns-css', 'build-sg-css']);
  gulp.watch('./patterns/**/*.scss', ['build-patterns-css', 'build-sg-css']);
  gulp.watch('./public/css/*.css', ['bs-reload']);

  gulp.watch('./src/templates/**/*.html', ['patterns']);
  gulp.watch('./patterns/**/*.html', ['patterns']);
  gulp.watch('./public/*.html', ['bs-reload']);

  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./patterns/**/*.js', ['scripts']);
  gulp.watch('./public/js/*.js', ['bs-reload']);
});
