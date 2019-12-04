// 引入gulp
var gulp = require("gulp");
// 引入pug插件
var pug = require("gulp-pug");
// 引入less插件
var less = require("gulp-less");
// 引入plumber出错不中断监控插件
var plumber = require("gulp-plumber");
// 引入clean-css css压缩插件
var cleanCss = require("gulp-clean-css");

// gulp.task定义任务
gulp.task("1hao",function(){
	// gulp.src 文件位置
	gulp.src("pug/*.pug")
		.pipe(plumber())
		.pipe(pug())//pug -> html
		.pipe(gulp.dest("html/"));
})
gulp.task("2hao",function(){
	gulp.src("less/*.less")
		.pipe(plumber())
		.pipe(less())//less -> css
		.pipe(cleanCss())
		.pipe(gulp.dest("css/"))
})
gulp.task("3hao",function(){
	gulp.watch("jade/*.pug",["1hao"])
	gulp.watch("less/*.less",["2hao"])
})