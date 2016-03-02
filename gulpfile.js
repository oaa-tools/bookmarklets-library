var gulp = require('gulp');
var concat = require('gulp-concat');
var stripCode = require('gulp-strip-code');

gulp.task('default', () => {
  return gulp.src([
    './forms.js',
    './headings.js',
    './images.js',
    './landmarks.js',
    './lists.js',
    './Bookmarklet.js',
    './InfoObject.js',
    './utils/*.js'
    ])
    .pipe(concat('library.js'))
    .pipe(stripCode({
      pattern: /^\(function[^;]+\.run\(\);[^;]+\)\(\);\s+/gm
    }))
    .pipe(stripCode({
      pattern: /^(import|export)[^;]+;\s+/gm
    }))
    .pipe(gulp.dest('extension'));
});
