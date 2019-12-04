var express=require("express");
var app=express();
var bodyParser=require("body-parser");

var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/userss");
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
    username:{type:String},
    pwd:{type:String},
    sex:{type:Number},
    city:{type:String}
},{collection:"users"});
var Model=db.model("users",Schema);

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/register.html");
});
app.post("/post",function(req,res){
    // console.log(req.body);
    Model.create(req.body,function(err,data){
        if(err){
            var objInfo={
                info:"注册错误",
                status:2
            };
        }else{
            var objInfo={
                info:"注册成功",
                status:1
            };
        }
        res.send(JSON.stringify(objInfo));
    });
});

//加载用户列表
app.get("/users",function(req,res){
    res.sendFile(__dirname+"/users.html");
});
//获取用户数据的接口
app.get("/getUserList",function(req,res){
    Model.find({},{username:1,sex:1,city:1},(err,data)=>{
        if(err){
            // console.log(err);
            var obj={
                info:"获取数据失败",
                status:1
            }

        }else{
            // console.log(data);
            var obj={
                users:data,
                status:2
            }
        }
        res.send(JSON.stringify(obj));
    });
});
//更新数据
app.post("/update",function(req,res){
    // console.log(req.body.data);
    //[req.body.data.index]:字段名保存用中括号解析变量
    if(req.body.data.sex=="男"){
        req.body.data.sex=1;
    }else{
        req.body.data.sex=2;
    }
    Model.update({_id:req.body.data._id},{$set:{username:req.body.data.username,sex:req.body.data.sex,city:req.body.data.city}},{multi:true},function(err,data){
        if(err){
            var obj={
                info:"保存失败",
                status:2
            };
        }else{
            var obj={
                info:"保存成功",
                status:1
            };
        }
        res.send(JSON.stringify(obj));
    });

});
//删除数据
app.post("/deldata",function(req,res){
    // console.log(req.body.data);
    Model.remove({_id:req.body.data},function(err,data){
        if(err){
            var obj={
                info:"删除失败",
                status:1
            };

        }else{
            var obj={
                info:"删除成功",
                status:2
            };
        }
        res.send(JSON.stringify(obj));
    });

});
app.all("/*",function(req,res){
        // console.log(req.url);
        // console.log(req._parsedUrl.pathname);

    // if(req.url!="/favicon.ico"){
        res.sendFile(__dirname+req.url);
    // }

});
app.listen(8888);