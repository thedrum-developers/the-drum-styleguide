var gulp = require('gulp');

require('./tasks/pre-process');
require('./tasks/scripts');
require('./tasks/del');

gulp.task('build', ['pre-process', 'scripts']);
