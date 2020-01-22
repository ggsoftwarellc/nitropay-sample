const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const del = require('del');

const clean = () => {
    return del(['./dist/**']);
};

const html = () => {
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

const assets = () => {
    return gulp.src(['./src/assets/**/*']).pipe(gulp.dest('./dist/assets'));
};

const misc = () => {
    return gulp.src(['./src/CNAME']).pipe(gulp.dest('./dist'));
};

gulp.task('default', gulp.series(clean, html, assets, misc));
