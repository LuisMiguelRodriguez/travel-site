var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import')
    browserSync = require('browser-sync');


gulp.task('default', function(){
  console.log("You just created you first gulp task!");
})

gulp.task('html', function (){
  console.log('Html Task running now...');
});

gulp.task('styles', function (){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport,nested, cssVars, autoprefixer]))
  .pipe(gulp.dest('./app/assets/temp/styles'));
});

// This will trigger several task that are listen within

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
