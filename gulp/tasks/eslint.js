'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var cache = require('gulp-cached');

var config = require('../config');

gulp.task('eslint:tags', function () {
  return gulp.src([
    // config.paths.mainJSFile,
    config.paths.srcTagfiles
  ])
  .pipe(cache('eslint'))
  .pipe(eslint())
  .pipe(eslint.format());

});
