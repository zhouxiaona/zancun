var http=require("http");
var server=http.createServer((req,res)=>{
    //设置中文的编码格式
    res.setHeader("Content-type","text/plan;charset=utf8");
    res.write("你好");
    res.end();
});
server.listen(8787,function(){
    console.log("服务器启动成功");
});