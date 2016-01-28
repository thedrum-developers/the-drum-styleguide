var gulp = require('gulp');

require('./tasks/pre-process');
require('./tasks/scripts');
require('./tasks/del');
require('./tasks/templates');

gulp.task('build', ['build-css', 'build-js']);
