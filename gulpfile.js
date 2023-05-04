const { src, dest, series, parallel, watch } = require("gulp");

function defaultTask(cb) {
  console.log("hello gulp4");
  cb();
}

// exports.ok = defaultTask;

// 任務A
function TaskA(cb) {
  console.log("TaskA");
  cb();
}

// 任務B
function TaskB(cb) {
  console.log("TaskB");
  cb();
}

//  先後順序
exports.s = series(TaskA, TaskB);

// 同步執行
exports.p = parallel(TaskA, TaskB);

// 要打包的檔案
function sassstyle() {
  return src("./sass/style.scss").pipe(dest("./dist/css"));
}
exports.style = sassstyle;
