var http=require("http");
var fs=require("fs");
var url=require("url");
var formidable=require("formidable");
var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url,true).pathname;

    if(pathname=="/"){
        var rs=fs.createReadStream("uploads.html");
        rs.pipe(res);

    }else if(pathname=="/uploads"){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            if(err){
                return console.log(err);
            }else{
                //存储字段
                // console.log("字段",fields);
                var fieldsStr=JSON.stringify(fields);
                fs.writeFileSync("1.txt",fieldsStr);

                //转存文件
                // console.log("文件",files);
                //判断有没有这个文件夹，没有则创建
                if(!fs.existsSync("uploads")){
                    fs.mkdirSync("uploads");
                }
                var filePath=files.img.path;
                var rs=fs.createReadStream(filePath);
                var ws=fs.createWriteStream("./uploads/"+files.img.name);
                rs.pipe(ws);

                rs.on("end",function(){
                    res.setHeader("Content-type","text/html;charset=utf8");
                    res.write("上传成功");
                    res.end();
                });
            }
        });

    }else if(pathname!="/favicon.ico"){
        var rs=fs.createReadStream("."+pathname);
        rs.pipe(res);
    }

});
server.listen(8880);