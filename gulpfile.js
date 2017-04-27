//////////////////////

///Required  Tasks     

//////////////////////

var gulp = require('gulp'),
  	uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
  	browserSync = require('browser-sync'),
  	reload = browserSync.reload,
  	plumber = require('gulp-plumber'),
  	rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('gulp-webpack'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    react = require('gulp-react'),
    htmlreplace = require('gulp-html-replace'),
    del = require('del');


// var path = {
//   HTML: 'WWUApp/index.html',
//   ALL: ['WWUApp/assets/js/*.js', 'WWUApp/assets/js/**/*.js', 'WWUApp/index.html'],
//   JS: ['WWUApp/assets/js/*.js', 'WWUApp/assets/js/**/*.js'],
//   MINIFIED_OUT: 'build.min.js',
//   DEST_SRC: 'dist/src',
//   DEST_BUILD: 'dist/build',
//   DEST: 'dist'
// };



// gulp.task('transform', function(){
//   gulp.src(path.JS)
//     .pipe(react())
//     .pipe(gulp.dest(path.DEST_SRC));
// });

// gulp.task('copy', function(){
//   gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST));
// });



//////////////////////

///Webpack  Tasks     

//////////////////////

gulp.task('webpackT', function() {
  return gulp.src('dist/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('WWUApp/assets/js'))
    .pipe(reload({stream:true}));
});



//////////////////////

///Babel  Tasks     

//////////////////////
gulp.task('babel', function() {
    return gulp.src('wwuSrc/index.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist'));
});


//////////////////////

///Scripts  Tasks     

//////////////////////

// gulp.task('scripts', function(){
// 	//console.log('It worked BG!');
// 	gulp.src(['WWUApp/assets/js/**/*.js', '!WWUApp/assets/js/**/*.min.js'])
// 	.pipe(plumber())
// 	.pipe(rename({suffix: '.min'}))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('WWUApp/assets/js'));
// 	// .pipe(reload({stream:true}));

// });

 gulp.task('scripts', function () {
  console.log('Scripts - It worked BG!');
      return gulp.src(['WWUApp/assets/js/**/*.js', '!WWUApp/assets/js/**/*.min.js'])
        .pipe(plumber())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('WWUApp/assets/js'));
  });



//////////////////////

  ///Sass  Tasks     

//////////////////////


gulp.task('sass', function () {

    gulp.src('WWUApp/assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('WWUApp/assets/css'))
        .pipe(reload({stream:true}));
});


 

//////////////////////

///CSS Minify  Tasks     

//////////////////////


// gulp.task('css', function(){
//     gulp.src('WWUApp/assets/css/**/*.css')
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(concat('style.min.css'))
//         .pipe(gulp.dest('WWUApp/assets/css'))
//         .pipe(reload({stream:true}));
// });


//////////////////////

///  BrowserSync  
///   Tasks     

//////////////////////

gulp.task('browser-sync', function() {

	browserSync({
		server:{
			baseDir: "./WWUApp/"
		}
	});
});


//////////////////////

///  HTML  Tasks     

//////////////////////

gulp.task('html', function() {
	gulp.src('WWUApp/**/*.html')
	.pipe(reload({stream:true}));
});




// gulp.task('build', function(){
//   gulp.src(path.JS)
//     .pipe(react())
//     .pipe(concat(path.MINIFIED_OUT))
//     .pipe(uglify(path.MINIFIED_OUT))
//     .pipe(gulp.dest(path.DEST_BUILD));
// });

// gulp.task('replaceHTML', function(){
//   gulp.src(path.HTML)
//     .pipe(htmlreplace({
//       'js': 'build/' + path.MINIFIED_OUT
//     }))
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('production', ['replaceHTML', 'build']);




//////////////////////

///  Build Tasks     

//////////////////////


gulp.task('build:cleanfolder', function(cb){
    del([
        'build/**'
    ], cb);
});


gulp.task('build:copy',function(){
    return gulp.src('WWUApp/**/*/')
    .pipe(gulp.dest('build/'));
});


gulp.task('build:remove',['build:copy'], function(cb){
    del([
        'build/assets/scss/',
        'build/assets/css/!(*.css)',
        'build/assets/js/!(*.min.js)'
    ], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);





//////////////////////

///   Watch Tasks     

//////////////////////

gulp.task('watch', function(){
   // gulp.watch(path.ALL, ['transform', 'copy']);
		gulp.watch('WWUApp/assets/js/**/*.js', ['scripts']);
		gulp.watch('WWUApp/**/*.html', ['html']);
    gulp.watch('WWUApp/assets/scss/**/*.scss', ['sass']);
    gulp.watch('WWUApp/index.js', ['babel', 'webpackT']);

});



//////////////////////

///Default  Tasks     

//////////////////////

gulp.task('default', ['babel', 'webpackT','sass', 'browser-sync', 'html', 'watch']);




