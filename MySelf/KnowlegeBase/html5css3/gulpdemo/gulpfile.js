var gulp=require("gulp")
var pug=require("gulp-pug")
var less=require("gulp-less")
var plumber=require("gulp-plumber")
var cleanCss=require("gulp-clean-css")
var autoprefixer=require("gulp-autoprefixer")
var concat=require("gulp-concat")

gulp.task("pugFor",function(){
	gulp.src("pug/*.pug")
	.pipe(plumber())
	.pipe(pug())
	.pipe(gulp.dest("html/"))
})

gulp.task("lessFor",function(){
	gulp.src("less/*.less")
	.pipe(plumber())
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(gulp.dest("css/"))
})

gulp.task("watchFor",function(){
	gulp.watch("pug/*.pug",["pugFor"])
	gulp.watch("less/*.less",["lessFor"])
})