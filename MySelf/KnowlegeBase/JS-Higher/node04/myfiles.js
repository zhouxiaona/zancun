var http=require("http");
var url=require("url");
var fs=require("fs");
var remove=require("../node03/file.js");
var server=http.createServer(function(req,res){
    res.setHeader("Content-type","text/html;charset=utf8")
    var urls=url.parse(req.url,true).query.urls;
    var delurls=url.parse(req.url,true).query.delurls;
    if(urls==undefined){
        var path=".";
    }else{
        var path=urls;
    }

    if(delurls!=undefined){
        var data=fs.statSync(delurls);
        if(data.isFile()){
            fs.unlinkSync(delurls);
        }else{
            remove.removeDir(delurls);
        }
        //删除之后刷新页面
        res.write(`<script>window.location.href='/'</script>`);
    }
    //渲染页面
    var arr=fs.readdirSync(path);
    res.write(`<table border="">`);
    res.write(`<tr><td>文件名</td><td>创建时间</td><td>操作</td></tr>`);
    for(var i=0;i<arr.length;i++){
        var surl=path+"/"+arr[i];
        var ress=fs.statSync(surl);
        var times=ress.ctime.getFullYear()+"年"+ress.ctime.getMonth()+1+"月"+ress.ctime.getDate()+"日";
        if(ress.isFile()){
            res.write(`<tr><td>${arr[i]}</td><td>${times}</td><td><a href="/?delurls=${surl}">删除</a></td></tr>`);
        }else{
            res.write(`<tr><td><a href="/?urls=${surl}">${arr[i]}</a></td><td>${times}</td><td><a href="/?delurls=${surl}">删除</a></td></tr>`);
        }

    }
    res.write(`</table>`);
    res.end();
})
server.listen(8980);