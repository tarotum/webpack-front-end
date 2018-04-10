var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('tunnel', function () {
	browserSync({
		server: {
			baseDir: 'build'
		},
		// notify: false,
		open: false,
		tunnel: true
	});
});

gulp.task('default', ['browser-sync']);
