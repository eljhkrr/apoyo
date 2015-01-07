var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	optipng = require('gulp-optipng'),
	at = require('gulp-asset-transform'),
	minifycss = require('gulp-minify-css'),
	minifyhtml = require('gulp-minify-html');

var options = ['-o5'];

gulp.task('minify-js', function(){
	gulp.src('src/js/*')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('minify-css', function(){
	return gulp.src('src/css/*')
		.pipe(minifycss())
		.pipe(gulp.dest('build/css'));
});

gulp.task('minify-html', function(){
	gulp.src('src/*.html')
		.pipe(minifyhtml())
		.pipe(gulp.dest('build'));
});

gulp.task('imagemin', function(){
	gulp.src('src/img/*')
		.pipe(optipng(options))
		.pipe(gulp.dest('build/img'));
	gulp.src('src/img/logo/*')
		.pipe(optipng(options))
		.pipe(gulp.dest('build/img/logo'));
});

gulp.task('asset-tx', function(){
	gulp.src('src/index.html')
		.pipe(at({
			id1: {
				tasks: [minifycss(), 'concat'] //Not working
			},
			id2: {
				tasks: [uglify(), 'concat']
			}
		}))
		.pipe(gulp.dest('build/client'));
});

gulp.task('default', ['minify-css', 'minify-js', 'minify-html', 'imagemin']);
