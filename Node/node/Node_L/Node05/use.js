var express = require("express");
var app = express();

//中间件
app.use(function(req,res,next){
    //省政府
    req.money=100;
    next("钱丢了");
});

app.use(function(req,res,next){
    //市政府
    req.money-=20;
    next();
});

app.use(function(req,res,next){
    //区政府
    req.money-=20;
    next();
});

//错误处理中间件
app.use(function(err,req,res,next){
    if(err){
        console.log(err);
    }
});

app.all("/",function(req,res){
    //变成字符串
    res.send(""+req.money);
});

app.listen(8887);