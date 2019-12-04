var gulp=require("gulp");
var gulpify=require("gulp-uglify");
var minify=require("gulp-minify-css");
gulp.task("mytask",function(){
    gulp.src("app/*.js").pipe(gulpify()).pipe(gulp.dest("./build/"));
});
gulp.task("mytask1",function(){
    gulp.src("app/*.css").pipe(minify()).pipe(gulp.dest("./build/"));
});
gulp.task("auto",function(){
    gulp.watch("app/*.js",["mytask"]);
    gulp.watch("app/*.css",["mytask1"]);
});