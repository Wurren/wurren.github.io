var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	cssmin 	= require('gulp-minify-css'),
	notify 	= require('gulp-notify'),
	path 	= require('path'),
	uglify	= require('gulp-uglify'),
	concat	= require('gulp-concat'),
	rename 	= require('gulp-rename');

gulp.task('less', function() {
	return gulp.src('public/less/style.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest('public/css'))
		.pipe(notify({ message: 'BOOM'}));
});

gulp.task('uglify', function() {
	return gulp.src('public/js/src/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'))
		.pipe(notify({ message: 'MINIFIED' }))
});

gulp.task('default', function() {
	gulp.watch('public/less/*.less', ['less']);
	gulp.watch('public/js/src/*.js', ['uglify']);
});

