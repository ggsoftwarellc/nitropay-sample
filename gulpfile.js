const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const del = require('del');
const replace = require('gulp-token-replace');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

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
        .pipe(
            replace({
                global: {
                    build: new Date().getTime()
                }
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

const serve = () => {
    return gulp.src('dist').pipe(
        webserver({
            livereload: true,
            port: 4209
        })
    );
};

gulp.task('default', gulp.series(clean, html, assets, misc));

gulp.task(
    'watch',
    gulp.series(html, serve, () => {
        gulp.watch('./src/**/*.html', html);
        gulp.watch('./src/assets/**/*', assets);
    })
);
