'use strict';

var fs = require('fs');
var merge = require('merge-stream');
var gulp = require('gulp');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var folders = require('gulp-folders');
var config = require('../config');


gulp.task('styles', function() {

    return gulp.src(config.paths.srcSASSFile)
         .pipe(sourcemaps.init())
         .pipe(sass({
           errLogToConsole: true,
           precision: 14
         }))
         .pipe(autoprefixer(
             'last 4 version',
             'safari 5',
             'ie 9',
             'opera 12.1',
             'ios 6',
             'android 4'
         ))
         .pipe(rename('styles.css'))
         .pipe(gulp.dest(config.paths.distCSS))
         .pipe(rename({
           suffix: '.min'
         }))
         .pipe(minifyCss())
         .pipe(sourcemaps.write('.'))
         .pipe(gulp.dest(config.paths.distCSS));
});
