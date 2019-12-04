console.log("我是index.js文件");
var res=require("./module1");
require("./index.css");
console.log(res.a);
res.fn();