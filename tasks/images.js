var gulp = require('gulp'),
	imageop = require('gulp-image-optimization');

gulp.task('build-images', function(cb) {
    gulp.src('./src/assets/images/*.+(png|jpg|gif|jpeg|svg)').pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./public/images')).on('end', cb).on('error', cb);
});