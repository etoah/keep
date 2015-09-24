// �������
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

// ��ʽ
gulp.task('styles', function() {
    return gulp.src('css/*.css')
       // .pipe(concat('index.css'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/styles'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// �ű�
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
       // .pipe(jshint('.jshintrc'))
       // .pipe(jshint.reporter('default'))
       // .pipe(concat('index.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({ message: 'Scripts task complete' }));
});


// ����
gulp.task('clean', function() {
    return gulp.src(['dist/styles', 'dist/scripts'], {read: false})
        .pipe(clean());
});

// Ԥ������
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

// ����
gulp.task('watch', function() {

    // ��������.scss��
    gulp.watch('css/*.css', ['styles']);

    // ��������.js��
    gulp.watch('js/*.js', ['scripts']);


    // ������ʱ�����ŷ���
    var server = livereload();

    // ��������λ�� dist/  Ŀ¼�µĵ�����һ���и��������������
    gulp.watch(['dist/**']).on('change', function(file) {
        server.changed(file.path);
    });

});