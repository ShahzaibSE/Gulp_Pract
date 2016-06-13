///<referance path="typings/tsd.d.ts"/>
"use strict";
var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rm = require('gulp-rm');
var beautify = require('gulp-beautify');
//Lets create some simple examples.
gulp.task('task1', function () {
    console.log("This is task #1");
});
gulp.task('task2', function () {
    console.log("This is task #2");
});
gulp.task('task3', function () {
    console.log("This is task #3");
});
gulp.task('task4', ['task1', 'task3', 'task2'], function () {
    console.log("This is task #4 , depending on previous tasks.");
});
//Removing Files.
gulp.task('Remove', function () {
    return gulp.src('scripts/**/*js', { read: false })
        .pipe(rm());
});
//Transpiling Files.
gulp.task('transpile', ['Remove'], function () {
    return gulp.src('scripts/**/*ts')
        .pipe(ts({
        target: "ES5", typescript: require('typescript')
    }))
        .pipe(gulp.dest('builds'));
});
//Concat Data
gulp.task('concat', function () {
    return gulp.src('text_files/**/*txt')
        .pipe(concat('final.txt')).pipe(uglify()) //Here we concat text from 3 files in 1 and then uglified it.
        .pipe(gulp.dest('build_text_files'));
});
//You all must be thinking what is pipe,you can consider a medium , where the you apply your logic , like for example by using gulp plugins.
//Now lets try to watch our project.
gulp.task('watch', function () {
    gulp.watch(['scripts/**/*ts'], ['transpile']);
});
//Lets create a default task.
gulp.task('default', ['Remove', 'watch']);
