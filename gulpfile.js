require('./gulp/tasks/styles');
require('./gulp/tasks/watch');

// var gulp = require('gulp'),
// watch = require('gulp-watch'),
// postcss = require('gulp-postcss'),
// autoprefixer = require('autoprefixer'),
// cssVars = require('postcss-simple-vars'),
// nested = require('postcss-nested'),
// cssImport = require('postcss-import'),
//
// browserSync = require('browser-sync').create();
//
// gulp.task('styles', function (){
//
//   return gulp.src('./app/assets/styles/styles.css')
//
//     .pipe(postcss( [cssImport,cssVars, nested, autoprefixer] ))
//     .pipe(gulp.dest('./app/temp/styles'));
//
// });
//
// gulp.task('watch', function(){
//   watch("./app/assets/styles/**/*.css", function(){
//     gulp.start('styles');
//   });
// });
