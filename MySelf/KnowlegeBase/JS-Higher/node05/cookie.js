var express=require("express");
var cookieParser=require("cookie-parser");
var app=express();

app.use(cookieParser());

//设置cookie
app.get("/setcookie",function(req,res){
    // res.cookie("username","张三",{maxAge:1000*7200});
    
    var nowTime=new Date();
    nowTime.setDate(nowTime.getDate()+7);

    res.cookie("username","张三",{expires:nowTime});
    res.send("设置cookie");
});

app.get("/getcookie",function(req,res){
    var username=req.cookies.username;
    res.send(`取到的cookie内容是${username}`);
});
app.listen(8877);