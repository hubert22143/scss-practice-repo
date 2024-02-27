const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("src/css/**/*.scss").pipe(sass()).pipe(dest("./dist/"));
}
function watchTask() {
  watch(["src/css/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
