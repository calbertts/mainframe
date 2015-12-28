var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var jspm = require('jspm');
var symlink = require('gulp-sym');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('default', function(cb) {
  runSequence(
    'clean',
    'app:install', [
      'html:copy',
      'config:copy',
      'app:copy',
      //'app:bundle'
    ],
    cb
  );
});

gulp.task('clean', shell.task([
  'rimraf build'
]));

gulp.task('app:install', shell.task([
  //'jspm install'
]));

gulp.task('html:copy', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
});

gulp.task('config:copy', function() {
  return gulp.src('src/config.js')
    .pipe(symlink('build/config.js', { force: true }))
});

gulp.task('jspm:copy', function() {
  return gulp.src('src/jspm_packages')
    .pipe(symlink('build/jspm_packages', { force: true }))
});

gulp.task('app:copy', function() {
  return gulp.src(['src/startup.js', 'src/main.js', 'src/actions/**/*.js', 'src/stores/**/*.js', 'src/components/**/*.js'], {base: "./src"})
    .pipe(sourcemaps.init())
    .pipe(babel({
      plugins: ["transform-decorators-legacy"],
      presets: ['react', 'es2015', 'stage-0']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'));
});

gulp.task('app:bundle', function() {
  var pkg = require('./package.json');
  var deps = pkg.jspm.dependencies;
  var modules = Object.keys(deps);
  var moduleList = modules.join(' + ');
  console.log('\n' + moduleList + '\n');

  return jspm.bundle(moduleList, 'src/dependency-bundle.js', {
    mangle: false,
    sourceMaps: false,
    inject: true,
    minify: true
  }).then(function() {
    console.log('Bundled');
    return gulp.src(['src/dependency-bundle.js'])
      .pipe(symlink(['build/dependency-bundle.js'], { force: true }));
  });
});

gulp.task('jspm:copy_dist', function() {
  return gulp.src('src/jspm_packages')
    .pipe(symlink('dist/jspm_packages', { force: true }))
});

gulp.task('build', ['jspm:copy_dist'], shell.task([
  'jspm bundle-sfx bpmn-js + ./src/components/workflowDesigner/BPMNDesigner/modeler/index + ./src/components/workflowDesigner/BPMNDesigner/modeler/custom/index dist/dependencies.js --skip-source-maps',
  'jspm bundle-sfx startup.js dist/app.js --skip-source-maps'
]));

gulp.task('watch', function() {
  gulp.watch(['src/startup.js', 'src/main.js', 'src/actions/**/*.js', 'src/stores/**/*.js', 'src/components/**/*.js'], ['app:copy']);
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});