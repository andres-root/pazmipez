'use strict';

var gulp = require('gulp');

var gjslint = require('gulp-gjslint');

var config = require('../config');

gulp.task('gjslint', function() {
    return gulp.src([
      config.paths.mainJSFile,
      config.paths.srcJSComponents + '**/*.js',
      './gulp/**/*.js'
    ]);
});
