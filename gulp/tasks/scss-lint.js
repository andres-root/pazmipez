'use strict';

var gulp = require('gulp');

var scsslint = require('gulp-scss-lint');

var cache = require('gulp-cached');

var config = require('../config');

gulp.task('scss-lint', function() {
  return gulp.src([
    config.paths.srcSASS + '**/*.scss'
  ]).
      pipe(cache('scsslint')).
      pipe(scsslint({
        'maxBuffer': 1000 * 1024
      }));
});
