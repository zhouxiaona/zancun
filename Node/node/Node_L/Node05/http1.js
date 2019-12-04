//nodeJs服务端
var http=require("http");
var server=http.createServer(function(req,res){

    var str="";
    req.on("data",function(chunk){
        str+=chunk;
    });
    req.on("end",function(){
        console.log(str);
    });

    var obj={
        name:"zhangsan",
        age:19
    };
    res.write(JSON.stringify(obj));
    res.end();
});
server.listen(8989);