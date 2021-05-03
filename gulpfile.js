'use strict';

const { src, dest } = require('gulp');
const concatCss = require('gulp-concat-css');

function generateCSS(cb) {
  src('./css/*/*.css')
    .pipe(concatCss('./css/styles.css'))
    .pipe(dest('.'));
  cb();
}

// this makes default gulp command, runs on just 'gulp'. Can chain multiple gulp tasks to run by default.
// Check 'updated gulp syntax' article below.
exports.default = generateCSS;

// this runs on 'gulp css'
// exports.css = generateCSS;

// article followed:
// https://travishorn.com/integrating-multiple-stylesheets-in-a-single-site-e720256edcee

// updated gulp syntax:
// https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js
