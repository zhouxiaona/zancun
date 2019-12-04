//require 引入http模块（node的内置模块）
var http = require("http");
//调用HTTP的接口，创建服务器；       回调---->异步
//回调存在异步，
//req -- request请求：浏览器提交给服务器相关    res -- response回复：服务器到浏览器
var server = http.createServer(function (req,res) {
    // console.log(11111);
    //更改服务器里面的代码的时候，要重新启动服务器
    //设置编码格式
    //  text/html， 可以识别标签
    //  text/plan， 不可以识别标签

    // res.write("<head><meta charset='utf-8' /></head>");  // 方法1
    // res.setHeader("Content-type","text/plan;charset=utf8");  // 方法2
    // res.setHeader("Content-type","text/html;charset=utf8");  // 方法2

    res.writeHeader(200,{"Content-type":"text/html;charset=utf8"});
    res.write("<h1>hello world111111111</h1>");

    //lsof -i tcp:8787

    //获得PID
    //kill 717（对应的tcp ID）

    res.write("你好世界");
    //end不关的话 浏览器会一直在请求
    res.end();
});
// console.log(222222);
server.listen(8789);