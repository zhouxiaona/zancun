var gulp=require("gulp")
var pug=require("gulp-pug")
var less=require("gulp-less")
var plumber=require("gulp-plumber")



gulp.task("pugFor",function(){
	gulp.src("jade/index.pug")
	.pipe(plumber())
	.pipe(pug())
	.pipe(gulp.dest("html/"))
})

gulp.task("lessFor",function(){
	gulp.src("less/index.less")
	.pipe(plumber())
	.pipe(less())
	.pipe(gulp.dest("css/"))
})

gulp.task("watchFor",function(){
	gulp.watch("jade/*.pug",["pugFor"])
	gulp.watch("less/*.less",["lessFor"])
})



