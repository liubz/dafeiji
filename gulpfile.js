/**
 * Created by Administrator on 2017/7/4 0004.
 */
var gulp=require("gulp");
let cleanCSS = require('gulp-clean-css');
var htmlminify = require("gulp-html-minify");
const imagemin = require('gulp-imagemin');
//js
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
gulp.task('default', function () {
	gulp.src('src/js/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js'));
});
gulp.task('minify-css', () => {
	return gulp.src('src/css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/css'));
});
gulp.task('build-html' , function(){
	return gulp.src("src/*.html")
		.pipe(htmlminify())
		.pipe(gulp.dest("dist"))
});
gulp.task('images', () =>
	gulp.src('src/images2/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images2'))
);