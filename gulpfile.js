'use strict';

var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    path = require('path'),
    angularFiles = path.join(__dirname, 'app/**/*.js'),
    sassFile = path.join(__dirname, 'scss/isdn.scss'),
    templateCacheFiles = path.join(__dirname, 'app/**/*.html'),
    distCss = path.join(__dirname, 'dist/css'),
    distJs = path.join(__dirname, 'dist/js'),
    templateCache = require('gulp-angular-templatecache'),
    ngAnnotate = require('gulp-ng-annotate'),
    minifycss = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    minifyjs = require('gulp-minify'),
    concat = require('gulp-concat');

gulp.task('default', ['build']);

gulp.task('angular', function() {
    gulp.src(angularFiles)
        .pipe(concat('isdn.js'))
        .pipe(ngAnnotate())
        .pipe(minifyjs({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(distJs));
});

gulp.task('sass', function(){
    gulp.src(sassFile)
        .pipe(sass({ style: 'outputStyle', indentWidth: 4 }))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(distCss));
});

gulp.task('templateCache', function () {
    return gulp.src(templateCacheFiles)
        .pipe(minifyhtml({empty: true}))
        .pipe(templateCache('isdn.tpls.js', {module: 'isdnBridge'}))
        .pipe(gulp.dest(distJs));
});

gulp.task('watch-angular', function() {
    gulp.watch(angularFiles, ['angular']);
});

gulp.task('watch-sass', function() {
    gulp.watch(sassFile, ['sass']);
});

gulp.task('watch-templateCache', function() {
    gulp.watch(templateCacheFiles, ['templateCache']);
});

gulp.task('watch', ['watch-sass', 'watch-angular', 'watch-templateCache']);

gulp.task('build', ['sass', 'angular', 'templateCache']);