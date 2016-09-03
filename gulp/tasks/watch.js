'use strict';

var gulp = require('gulp');
var sequence = require('run-sequence');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('watch', function() {

  watch(config.paths.src + '**/' + config.extensions.sass, function() {
    console.log('Reloading Styles...');

    sequence([
        'scss-lint',
        'styles',
      ]
    );
  });

  watch(config.paths.src + '**/' + config.extensions.js, function() {
    console.log('Reloading Scripts...');

    sequence([
        'scss-lint',
        'gjslint',
        'scripts',
      ]
    );
  });
});
