//用来连接数据库的模块
var mongoose=require("mongoose");
//连接数据库
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
    age:{type:Number,default:20},
    // hobby:{hobby1:{type:String}},
    // hobby2:{type:String}
},{collection:"person"});

var Model=db.model("person",Schema);

//save 增加或者更新
var doc=new Model({
    name:"王宝强",
    age:23
});
doc.save(function(err,data){
    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
})


// Model.find({},{},function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// Model.find({age:{$lt:30}},{name:1},function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

//支持ES6箭头语法 promise
// Model.find({age:{$gt:30}},null).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// Model.find({$or:[{name:/^李/},{name:/^马/}]},null).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

//添加
// Model.create({name:"周鸿祎",age:45},function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });



//更新
// Model.update({name:"马云"},{$se`t:{age:35}},{multi:true}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

//删除
// Model.remove({name:"周娜"},function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

//游标操作
// Model.find({},{},{sort:{age:-1}},function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// Model.find().sort({age:-1}).then((data)=>{
//     console.log(data);
// }).then((err)=>{
//     console.log(err);
// });

// Model.find({},{},{sort:{age:-1},skip:2,limit:2},function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// var express=require("express");
// var app=express();
// Model.find().then((data)=>{
//     console.log(data);
//
//     app.get("/",function(req,res){
//         var str="";
//         for(var i=0;i<data.length;i++) {
//             str+=`<p>姓名是：${data[i]['name']}; 年龄是：${data[i]['age']}</p>`;
//         }
//         res.send(str);
//     });
// }).catch((err)=>{
//     console.log(err);
// });
// app.listen(8987);

// Model.find(function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

