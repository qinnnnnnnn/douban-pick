var gulp = require('gulp');
var stylus = require('gulp-stylus');


var paths = {
  stylus: ['stylus/**/*.styl']
};

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['stylus']);