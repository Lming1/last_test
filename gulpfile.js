//gulpfile.js

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');

var jsfiles = [
  'src/js/FileSaver.js',
  'src/js/screenfull.js',
  'src/js/app.js',
  'src/js/paulund_modal_box.js',
];
gulp.task('concat:js', function() {
  return gulp.src(jsfiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy:html', function() {
  return gulp.src('src/index.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:img', function() {
    return gulp.src('src/js/images/*')
        .pipe(gulp.dest('dist/js/images'));
});

gulp.task('minify:js', function() {
  return gulp.src('dist/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify:css', function() {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('copy:lib', function() {
  return gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 3001
  });
});


gulp.task('copy', ['copy:html', 'copy:img', 'copy:lib']);
gulp.task('build', ['concat:js', 'copy', 'minify:css']);
gulp.task('server', ['connect'])
gulp.task('default', ['build', 'watch', 'server']);
