const gulp        = require('gulp');
const browserSync = require('browser-sync'); /* аналог live server */
const sass        = require('gulp-sass'); /* запускает компилятор кода */
const cleanCSS = require('gulp-clean-css'); /* сжимает css код */
const autoprefixer = require('gulp-autoprefixer'); /* подставляет вендерные префиксы, где это необходимо */
const rename = require("gulp-rename"); /* переименовывает файлы */
const imagemin = require('gulp-imagemin'); /* оптимизация (сжатие) картинок */
const htmlmin = require('gulp-htmlmin'); /* сжатие html в min */


gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist" /* сервер запускается с чистовой папки */
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload); /* cледим за изменением index.html */
});

gulp.task('styles', function() { /* компиляция файлов, которые заканчиваются на scss или sass */
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css")) /* компилированые файлы складываются в чистовую папку */
        .pipe(browserSync.stream()); 
});
 
gulp.task('watch', function() { /* следим за изменениями определенных файлов, если какой-то файл будет изменен, то задача styles перезапускается */
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function() {
    return gulp.src("src/*.html") /* получаем любой файл html из папки src */
        .pipe(htmlmin({ collapseWhitespace: true })) /* сжимаем html до min */
        .pipe(gulp.dest("dist/")); /* html.min перемещается в папку dist */
});

gulp.task('scripts', function() { /* все скрипты из папки src копируются в папку dist */
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function() { /* все шрифты из папки src копируются в папку dist */
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function() { /* все иконки из папки src копируются в папку dist */
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"));
});

gulp.task('mailer', function() { /* все файлы из mailer из папки src копируются в папку dist */
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('images', function() { /* все картинки из папки src сжимаются и копируются в папку dist */
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'images', 'html')); /* все написанные задачи запускаются параллельно */