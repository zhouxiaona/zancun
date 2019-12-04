var express=require("express");
var session=require("express-session");
var app=express();

app.use(session({
    secret:"mysecret",
    resave:true,
    saveUninitialized:false
}));

app.get("/setsession",function(req,res){
    req.session.username="zhangsan";
    res.send("session设置成功");
});

app.get("/getsession",function(req,res){
    var username=req.session.username;
    res.send("session名字是："+username);
});
app.listen(8989);