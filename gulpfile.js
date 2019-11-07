'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var deploy = require('gulp-gh-pages');


gulp.task('sass', function(){
    gulp.src('./app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    gulp.src("./dist/**/*.*")
        .pipe(deploy());
});

