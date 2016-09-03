'use strict';

var gulp = require('gulp');

var sequence = require('run-sequence');

gulp.task('build', function(callback) {
  sequence([
    'scss-lint',
    'styles',
    'gjslint',
    'scripts',
    ],
    callback
  );
});
