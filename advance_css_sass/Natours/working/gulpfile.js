const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass =  require('gulp-sass');
const concat = require('gulp-concat');


/*
--- TOP LEVEL FUNCTOINS ---

gulp.task - Define tasks

gulp.scr - Point to files to use

gulp.dest - Points to folder to output

gulp.watch - Watch files and folders for change

*/

// Logs Message
gulp.task('message', async function(){
    return console.log(imagemin);
});

// Copy All HTML files
gulp.task('copyHtml', async function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

//Complie Sass
gulp.task('sass', () =>
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
);


// Minify JS
gulp.task('minify', () =>
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
);

//Concat Scripts and Minify Scripts
gulp.task('scripts', () =>
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
)


// Run all tasks except for Minify JS
gulp.task('default', gulp.parallel(
    ['copyHtml','imageMin','sass']
));