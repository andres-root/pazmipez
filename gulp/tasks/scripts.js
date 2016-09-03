'use strict';

var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');

//the title and icon that will be used for the Gulp notifications
var notifyInfo = {
  title: 'Gulp',
  icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: notifyInfo.title,
    icon: notifyInfo.icon,
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('scripts', function() {
  // LOADS Utility.js file first so that other JS has access to the logging
  // features.
  return gulp.src([
    config.paths.srcJSAbstract + config.extensions.js,
    config.paths.srcJSComponents + config.extensions.js,
    config.paths.srcJSBehaviors + config.extensions.js,
    config.paths.mainJSFile.substr(2),
    '!' + config.paths.srcJSIE8 + config.extensions.js
  ])
    .pipe(sourcemaps.init())
    .pipe(plumber(plumberErrorHandler))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.paths.distJS))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.distJS));
    /*.pipe(gulp.dest(config.paths.sitecoreJS))*/
});


