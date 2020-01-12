var gulp = require('gulp');
var bs = require('browser-sync');
var concatCss = require('gulp-concat-css');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('server', function () {
    bs.init({
        server: {
            baseDir: "./public/"
        }
    });
    gulp.watch('./src/less/*.less' , gulp.series('less'));
    gulp.watch('./src/*.js').on('change', bs.reload);
});

gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(concatCss('style.css'))
        // .pipe(minifyCSS('style.css'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(bs.stream())
});

