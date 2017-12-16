//gulpfile.js

var gulp = require('gulp');
var uglify  = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');


var jsSrc = [
  'src/js/FileSaver.js',
  'src/js/screenfull.js',
  'src/js/app.js',
  'src/js/paulund_modal_box.js',
];
gulp.task('js', function(cb) {
  // place code for your default task here
  // console.log('default')//
  return gulp.src(jsSrc)
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
});
gulp.task('copy:html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});
gulp.task('minify:css', function() {
    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
});
gulp.task('copy:img', function() {
    return gulp.src('src/js/images/*')
        .pipe(gulp.dest('dist/js/images'));
});


gulp.task('copy', ['copy:html','copy:img']);
gulp.task('build', ['js', 'copy', 'minify:css']);
