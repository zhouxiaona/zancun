var http=require("http");
var url=require("url");
var fs=require("fs");
var server=http.createServer(function(req,res){
    var path=url.parse(req.url,true);
    var pathname=path.pathname;
    var str="我是字符串";
    // console.log(pathname);
    //根据不同的地址跳转不同的页面
    if(pathname=="/index" || pathname=="/"){
        res.setHeader("Content-type","text/html;charset=utf-8");
        //加载主页
        fs.readFile("index.html","utf-8",function(err,data){
            if(err){
                return console.log(err);
            }else{
                console.log(data);
                res.write(data);
                res.end();
            }
        });
    }else if(pathname=="/goods"){
        res.setHeader("Content-type","text/html;charset=utf-8");
        //加载商品页面
        fs.readFile("goods.html","utf-8",function(err,data){
            if(err){
                return console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        });
    }else if(pathname=="/ajax"){
        var getData=url.parse(req.url,true);
        var name=getData.query.name;
        var age=getData.query.age;
        console.log(name,age);
        var obj={
            name,
            age
        };
        res.write(JSON.stringify(obj));
        res.end();
    }
    // else if(pathname!="/jQuery.js"){
    //     //读取jq加载到页面
    //     var res=fs.readFileSync("./jQuery.js");
    //     res.write(data);
    //     res.end();
    // }

    // 加载其他页面，例如css文件
    else if(pathname!="/favicon.ico"){
        var data=fs.readFileSync("."+pathname);
        res.write(data);
        res.end();
    }
    
});
server.listen(8080);