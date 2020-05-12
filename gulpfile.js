const gulp = require('gulp');
const clean = require('gulp-clean');
const composer = require('gulp-uglify/composer');
const uglifyes = require('uglify-es');
const uglify = composer(uglifyes, console);

gulp.task('minify', function () {
    return gulp.src('dist/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});

gulp.task('public', function () {
    return gulp.src('public/**/*.*')
        .pipe(gulp.dest('dist/public'));
});
