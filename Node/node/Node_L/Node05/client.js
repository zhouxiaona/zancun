//通过nodeJs模拟客户端
var http=require("http");
var options={
    method:"post",
    host:"localhost",
    port:8989,
    path:"/"
};
//向服务器发送请求
var request=http.request(options,function(res){
    var str="";
    res.on("data",function(chunk){
        str+=chunk;
    });
    res.on("end",function(){
        console.log(str);
    });
});
var obj={
    name:"lisi",
    age:18
}
request.write(JSON.stringify(obj));
request.end();