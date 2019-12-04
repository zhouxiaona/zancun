var http=require("http");
var url=require("url");
var server=http.createServer(function(req,res){
    // console.log(req.url);
    var result=url.parse(req.url,true);
    console.log(result);
    res.writeHeader(200,{"Content-type":"text/html;charset=utf8"});
    var name=result.query.name;
    var age=result.query.age;
    res.write(`姓名是 :${name};</br>年龄是：${age}`);
    res.end();
});
server.listen(8787);
//该端口号或者关闭另一个端口号，端口占用

 //import:导入  export:导出