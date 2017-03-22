var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function(){
  //loads browser
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    // reloads the browser when index.html gets saved
    console.log('index.html has just been edited');
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
