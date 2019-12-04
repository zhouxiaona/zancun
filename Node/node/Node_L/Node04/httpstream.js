var http=require("http");
var url=require("url");
var fs=require("fs");
var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url,true).pathname;

    if(pathname=="/" || pathname=="/index"){
        var rs=fs.createReadStream("index.html");
        rs.pipe(res);

    }else if(pathname=="/goods"){
        var rs=fs.createReadStream("goods.html");
        rs.pipe(res);

    }else if(pathname!="/favicon.ico"){
        console.log(pathname);
        var rs=fs.createReadStream("." + pathname);
        rs.pipe(res);
    }

});
server.listen(8888);