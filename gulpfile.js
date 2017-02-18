var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Did it!");
});

gulp.task('html', function(){
	console.log("more cool shit");
});

gulp.task('styles', function(){
	console.log("Sass rocks!");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
	
	
});