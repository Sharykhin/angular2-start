var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify');

var tsProject = ts.createProject('src/tsconfig.json');

var libs = [
	'./node_modules/systemjs/dist/system.src.js',
	'./node_modules/angular2/bundles/angular2.dev.js'
];

gulp.task('copy-html', function() {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('libs', function() {
	gulp.src(libs)
		.pipe(gulp.dest('./dist/vendor'))
});

gulp.task('build', ['copy-html'], function() {
	var tsResult = tsProject.src('src/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));
	return tsResult.js
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.ts', ['build']);
	gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('default', ['libs', 'build', 'watch']);