var http=require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");
var server=http.createServer(function(req,res){
    // console.log(req.method);
    var pathname=url.parse(req.url,true).pathname;
    if(pathname=="/"){
        //加载注册页面
        var rs=fs.createReadStream("post.html");
        rs.pipe(res);
    }else if(pathname=="/post"){
        //处理post请求
        var str="";
        req.on("data",function(chunk){
            // console.log(chunk.toString());
            str+=chunk;
        });
        req.on("end",function(){
           var postObj=querystring.parse(str);
           console.log(postObj);
        });

    }else if(pathname=="/get"){
        var getObj=url.parse(req.url,true).query;
        // console.log(getObj);
        res.write(JSON.stringify(getObj));
        res.end();

    }else if(pathname!="/favicon.ico"){
        var rs=fs.createReadStream("."+pathname);
        rs.pipe(res);
    }

});
server.listen(8787);