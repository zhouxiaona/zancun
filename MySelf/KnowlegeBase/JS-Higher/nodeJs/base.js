var a="world";
var myfn=function(){
    console.log("我是base.js里的fn函数");
}
module.exports={
    myfn:myfn,
    a:a
}