var events=require("events");
var EventEmiter=new events.EventEmitter();
function test(){
    console.log("我是test方法");
}
EventEmiter.on("lee",test);
EventEmiter.emit("lee");
