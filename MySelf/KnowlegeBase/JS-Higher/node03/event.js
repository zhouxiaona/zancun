var events=require("events");
var util=require("util");

//给对象绑定事件
function Dad(){

}
//Dad继承events的方法
util.inherits(Dad,events);
var newdad=new Dad();

function test(){
    console.log("我是test方法");
}
function myfn(){
    console.log("我是myfn方法");
}
//自定义事件名称，自定义函数,

//设置限制绑定事件的数量
// newdad.setMaxListeners(2);

// 一个事件名称可以可以多次绑定
newdad.addListener("lee",test);
newdad.addListener("lee",myfn);

//也可以用on来绑定
// newdad.on("lee",test);
// newdad.on("lee",myfn);

//解绑单个事件绑定
// newdad.removeListener("lee",test);
//解绑所有事件绑定
// newdad.removeAllListeners();

//通过once绑定的方法只触发一次
// newdad.once("onceE",test);

//触发事件，可以多次触发
newdad.emit("lee");
newdad.emit("lee");
newdad.emit("lee");

// newdad.emit("onceE");
// newdad.emit("onceE");
// newdad.emit("onceE");