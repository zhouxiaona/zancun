var test1=require("./base");
console.log("我是mytestjs文件");
var myfn=function(){
    console.log("我是mytestjs里的fn函数");
}
var a="你好";
//导出变量或者函数
module.exports={
    myfn:myfn,
    a:a,
    a1:test1.a,
    myfn2:test1.myfn
}