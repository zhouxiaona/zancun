var express=require("express");
var querystring=require("querystring");
var bodyParser=require("body-parser");

var app=express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/",function(req,res){
    // res.send(111);
    // res.send("<h1>我是主页</h1>");
    //加载post提交页面
    res.sendFile(__dirname+"/post.html");
});

app.get("/goods",function(req,res){
    res.send("<h1>我是商品页</h1>");
});

app.post("/post",function(req,res){
    // var str="";
    // req.on("data",function(chunk){
    //     str+=chunk;
    // });
    //
    // req.on("end",function(){
    //     // console.log(str);
    //     var data=querystring.parse(str);
    //     console.log(data);
    //     res.send(`<h1>姓名是：${data['username']};年龄是：${data['age']}</h1>`);
    // });

    //通过body-parser获取到参数
    console.log(req.body);
    res.send(`<h1>姓名是：${req.body['username']};年龄是：${req.body['age']}</h1>`);

});

app.get("/get",function(req,res){
    var data=req.query;
    // console.log(data);
    res.send(JSON.stringify(data));
});

app.get("/test/:id/:name",function(req,res){
    console.log(req.params);
    var str=`<h1>id的值是${req.params.id};姓名是：${req.params.name}</h1>`;
    res.send(str);
});

//get请求或者post请求
app.all("/*",function(req,res){
    //console.log(req._parsedUrl.pathname);
    var pathname=req._parsedUrl.pathname;
    if(pathname!="/favicon.ico"){
        // console.log(__dirname);
        res.sendFile(__dirname+pathname);
    }
});

app.listen(8787);