var gulp = require('gulp');
var ts = require('gulp-typescript');
var pug = require('gulp-pug');
var postcss = require('gulp-postcss');


var dependencies = [
	'es6-shim/es6-shim.min.js',
	'zone.js/dist/zone.js',
	'reflect-metadata/Reflect.js',
	'systemjs/dist/system.src.js',
	'rxjs/**/*.js',
	'@angular/**/*.js',
];

gulp.task("resources", () => {
	return gulp.src(["src/resources/**/*"])
		.pipe(gulp.dest("./build/"))
});

gulp.task("libs", () => {
	return gulp.src(dependencies, {cwd: "node_modules/**"})
		.pipe(gulp.dest("./build/libs/"));
});

gulp.task('styles', () => {
	var processors = [
		require('postcss-autoreset')({
			reset: {
				margin: 0,
				padding: 0,
				borderRadius: 0,
			}
		})
	];
	return gulp.src('./src/styles/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./build/'));
});

gulp.task('app', () => {
	var project = ts.createProject('tsconfig.json');
	return project.src()
		.pipe(ts(project))
		.pipe(gulp.dest('./build/app'));
});

gulp.task('templates', () => {
	return gulp.src(['./src/templates/**/*.pug'])
		.pipe(pug({
			pretty: true
		}))
		.on('error', console.log)
	.pipe(gulp.dest('./build/'))
});

gulp.task('build', ['templates', 'resources', 'styles', 'app', 'libs'], () => {
});

gulp.task('watch', ['build'], () => {
	gulp.watch('./src/app/**/*', ['app']);
	gulp.watch('./src/resources/**/*', ['resources']);
	gulp.watch('./src/styles/**/*', ['styles']);
	gulp.watch('./src/templates/**/*', ['templates']);
});