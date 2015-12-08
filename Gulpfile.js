var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('src/tsconfig.json');

gulp.task('copy-html', function() {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('build', ['copy-html'], function() {
	var tsResult = tsProject.src('src/**/*.ts')
		.pipe(ts(tsProject));
	return tsResult.js
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('default', ['build']);