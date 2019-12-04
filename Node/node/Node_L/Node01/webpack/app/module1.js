console.log("我是module1.js文件");
var a="我是a变量";
var fn=function(){
    console.log("我是fn函数");
};
module.exports={
    a,
    fn
}