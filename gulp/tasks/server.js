'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var opn = require('opn');
var sequence = require('run-sequence');
var config = require('../config');

gulp.task('server:start', function() {
  connect.server({
    host: config.server.host,
    port: config.server.port,
    root: config.paths.root,
    livereload: true
  });
});

gulp.task('opn', function() {
  opn(
      'http://localhost:' + config.server.port +
      '/' + config.server.defaultPage
  );
});

gulp.task('server', function(callback) {
  sequence('server:start', 'opn', callback);
});
