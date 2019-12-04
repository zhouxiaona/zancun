var express = require("express");
var monggose = require("mongoose");
var bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));

var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/user");
var db=mongoose.connection;
db.on("error",function(){
    if(error){
        return console.log(error);
    }
});
db.on("open",function(){
    console.log("数据库连接成功");
});
//数据库模型
var Schema=mongoose.Schema({
    name:{type:String},
    sex:{type:String,default:"男"},
    city:{type:String}
},{collection:"person"});
var Model=db.model("person",Schema);

//加载注册页面
app.get("/",function (req,res) {
    res.sendFile(__dirname+"/form.html");
});

app.get("/get",function(req,res){
    var data=req.query;
    //向mongoose数据库中存入数据
    Model.create({name:data.name,sex:data.sex,city:data.city},function(err,data){
        if(err){
            var obj={
                status:"1",
                message:"注册失败"
            };
        }else{
          var obj={
            status:"0",
            message:"注册成功"
          };
        }
        res.send(JSON.stringify(obj));
    });
});

//加载编辑页面
app.get("/edit",function(req,res){
    res.sendFile(__dirname+"/edit.html");
});

//数据库更新数据
app.get("/update",function(req,res){
    var data=req.query;
    console.log(data);
    Model.update({_id:data.ids},{$set:{name:data.name,sex:data.sex,city:data.city}},{multi:true},function(err,data){
        if(err){
            var obj={
                status:"1",
                message:"保存失败"
            };
        }else{
            var obj={
                status:"0",
                message:"保存成功"
            };
        }
        res.send(JSON.stringify(obj));
    });
});

//渲染编辑页面
app.get("/render",function(req,res){
    //向数据库中拿数据
    Model.find(function(err,data){
        if(err){
            return console.log(err);
        }else{
            res.send(JSON.stringify(data));
        }
    });
});

app.all("/*",function (req,res){
    //加载css文件以及js文件等其他样式页面
    var pathname=req._parsedUrl.pathname;
    res.sendFile(__dirname+pathname);

});

app.listen(8787);
