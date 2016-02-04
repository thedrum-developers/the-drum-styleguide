var gulp = require('gulp');

require('./tasks/pre-process');
require('./tasks/scripts');
require('./tasks/del');
require('./tasks/patterns');
require('./tasks/images');
require('./tasks/docs');
require('./tasks/templates');
require('./tasks/browser-sync');
require('./tasks/fonts');

gulp.task('build', ['build-css', 'build-js', 'docs', 'patterns', 'build-images', 'build-fonts']);
gulp.task('serve', ['build', 'browser-sync']);
