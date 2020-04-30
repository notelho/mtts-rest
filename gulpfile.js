const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);
const gulp = require('gulp');

gulp.task('minify', function () {
  return gulp.src('dist/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});