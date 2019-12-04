var http=require("http");
var url=require("url");
var server=http.createServer(function(req,res){
    var path=url.parse(req.url,true);
    var pathname=path.pathname;
    res.setHeader("Content-type","text/html;charset=utf-8");

    //根据不同的地址跳转不同的页面
    if(pathname=="/index" || pathname=="/"){
        res.write("<h1>我是主页内容</h1>");
    }else if(pathname=="/goods"){
        res.write("<h1>我是商品内容</h1>");
    }else{
        res.write("<h1>我是其他内容</h1>");
    }

    res.end("hello world");
});
server.listen(8989);