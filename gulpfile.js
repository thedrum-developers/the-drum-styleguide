var gulp = require('gulp');

require('./tasks/pre-process');
require('./tasks/scripts');
require('./tasks/del');
require('./tasks/patterns');
require('./tasks/docs');
require('./tasks/templates');
require('./tasks/browser-sync');

gulp.task('build', ['build-css', 'build-js', 'docs', 'patterns']);
gulp.task('serve', ['build', 'browser-sync']);
