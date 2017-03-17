var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import')
    browserSync = require('browser-sync').create();


gulp.task('default', function(){
  console.log("You just created you first gulp task!");
});

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
  //loads browser
  browserSync.init({
    server: {
      notify: false,
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    // reloads the browser when index.html gets saved
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

});

// before this task is run it will run the second argument
// which is an array of dependecy task to run
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
