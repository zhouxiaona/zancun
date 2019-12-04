//文件管理器=====

var http=require("http");
var fs=require("fs");
var url=require("url");
var rmdata=require("./file.js");

var server=http.createServer(function(req,res){
    res.setHeader("Content-type","text/html;charset=utf-8");

    //接受get参数,此时点击的是文件夹，返回的当前点击文件夹的路径
    var purl=url.parse(req.url,true).query.purl;
    console.log(purl);
    //接受删除参数，此时点击删除按钮，传回的是要删除的文件夹或者文件的路径
    var delurl=url.parse(req.url,true).query.delurl;
    console.log(delurl);

    if(purl==undefined){
        //如果没有get参数传入，默认当前路径
        var path=".";
    }else{
        var path=purl;
    }

    if(delurl!=undefined){
        //判断是文件或者文件夹
        var statData=fs.statSync(delurl);

        // if(fs.existsSync(delurl)){
        //     var statData=fs.statSync(delurl);
        //     if(statData.isFile()){
        //         //删除文件
        //         fs.unlinkSync(delurl);
        //
        //     }else{
        //         //删除文件夹
        //         rmdata.removeDir(delurl);
        //     }
        // }

        if(statData.isFile()){
            //删除文件
            fs.unlinkSync(delurl);

        }else{
            //删除文件夹
            rmdata.removeDir(delurl);
        }
        //删除之后，跳回主页
        res.write("<script>window.location.href='/'</script>");
    }

    //获取到当前目录的内容
    var arr=fs.readdirSync(path);
    res.write("<table border=''>");
    res.write("<tr><td>文件名</td><td>创建时间</td><td>操作</td></tr>");
    for(var i=0;i<arr.length;i++){
        //组装路径
        var urlpath=path+"/"+arr[i];
        var stats=fs.statSync(urlpath);
        var createtime=stats.ctime.getFullYear()+"年"+stats.ctime.getMonth()+1+"月"+stats.ctime.getDate()+"日";
        //判断是文件或者是文件夹
        if(stats.isFile()){
            //是文件
            res.write(`<tr><td>${arr[i]}</td><td>${createtime}</td><td><a href="/?delurl=${urlpath}">删除</a></td></tr>`);
        }else{
            //是文件夹
            res.write(`<tr><td><a href="/?purl=${urlpath}">${arr[i]}</a></td><td>${createtime}</td><td><a href="/?delurl=${urlpath}">删除</a></td></tr>`);
        }
    }

    res.write("</table>");
    res.end();
});
server.listen(8989);