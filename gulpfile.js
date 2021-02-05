'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('css', function() {
  return gulp.src('css/*/*.css')
    .pipe(concatCss('css/styles.css'))
    .pipe(gulp.dest('.'));
});
