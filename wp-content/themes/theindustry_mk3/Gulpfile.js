var gulp       = require('gulp');
var sass       = require('gulp-sass');
var bourbon    = require('node-bourbon').includePaths;

gulp.task('styles', function() {
  gulp.src('_/scss/style.scss')
    .pipe(sass({
        outputStyle: 'compressed',
        precision: 7,
        includePaths: ['styles'].concat(bourbon)
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', ['styles'], function() {
  gulp.watch('_/**/*.scss', ['styles']);
});