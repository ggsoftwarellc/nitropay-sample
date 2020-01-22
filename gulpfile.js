const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const del = require('del');

const clean = () => {
    return del(['./dist/**']);
};

const include = () => {
    return gulp
        .src(['./src/**/*.html'])
        .pipe(
            fileinclude({
                prefix: '@@',
                basepath: '@file'
            })
        )
        .pipe(gulp.dest('./dist'));
};

gulp.task('default', gulp.series(clean, include));
