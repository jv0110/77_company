'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-cleanhtml');
const autoPrefixer = require('gulp-autoprefixer');

const sassFolders = [
  {
    folder_name: 'index',
    path: './src/scss/index/index.scss'
  },
  {
    folder_name: 'thank_you',
    path: './src/scss/thank_you/thank_you.scss'
  }
];
const htmlFiles = [
  {
   path: './src/index.html'
  },
  {
    path: './src/thank_you.html'
  }
]
gulp.task('workflow', function(done){
  sassFolders.forEach(folder => {
    gulp.src(folder.path, { base: `./src/scss/${folder.folder_name}`})
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('./dist/css'))
  
    done();
  });
});
gulp.task('cssdev', function(done){
  sassFolders.forEach(folder => {
    gulp.src(folder.path, {base: `./src/scss/${folder.folder_name}`})
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('./src/css'));
  });

  done();
});
gulp.task('genhtml', function(done){
  htmlFiles.forEach(html => {
    gulp.src(html.path, { base: './src'})
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./dist'))
  
    done();
  });
});
gulp.task('imagemin', function(done){
  gulp.src('./src/assets/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/assets/images'))

  done();
});
gulp.task('copyfonts', function(done){
  gulp.src('./src/assets/fonts/**/*')
  .pipe(gulp.dest('./dist/assets/fonts'))

  done();
});
gulp.task('copyjs', function(done){
  gulp.src('./src/js/**/*.js')
  .pipe(gulp.dest('./dist/js'))

  done();
});
gulp.task('default', function(done){
  gulp.watch('./src/scss/**/*.scss', gulp.series('workflow'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('cssdev'));
  gulp.watch('./src/**/*.html', gulp.series('genhtml'));

  done();
});