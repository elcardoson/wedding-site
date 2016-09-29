// Include gulp
var gulp = require('gulp');

// include init vars plugins 
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imageop = require('gulp-image-optimization');



// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'html'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp.src("app/*.html")
        .pipe(browserSync.stream());
});

gulp.task('images', function(cb) {
    gulp.src(['app/src/**/*.png','app/src/**/*.jpg','app/src/**/*.gif','app/src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('app/images')).on('end', cb).on('error', cb);
});


gulp.task('default', ['serve','images']);





