const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require('gulp-purgecss')
function buildStyles() {
  return src("src/css/**/*.scss")
  .pipe(sass())
  .pipe(purgecss({content: ['src/*.html']}))
  .pipe(dest("./dist/"));
}
function watchTask() {
  watch(["src/css/**/*.scss", 'src/*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
