var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Test')
var db = mongoose.connection;
db.on('error',()=>{
  if(error){
    return console.log(error)
  }
});

db.on('open',()=>{
  console.log('dataBase connected successful~~');
})

var UserSchema = new mongoose.Schema({
  id:{type: Number},
  name:{type: String},
  age:{type: Number}
});
var Model = db.model('user',UserSchema)

// var doc = new ClassModel({
//   lessonName:'英语',
//   score:130
// });
// doc.save(function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// 增加========================
// var doc = new Model({
//   name: '周娜888',
// });
// 保存到数据库  save
// doc.save((err,data)=>{
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// });

// create
// for(var i = 0;i < 10;i++){
//   ClassModel.create({lessonName:'面条'+i,score:i},function(err,data){
//     if(err){
//       return console.log(err)
//     }else{
//       console.log(data)
//     }
//   })
// }

// Model.create({id:6,name:'哈哈',age:20},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// 删除========================
// Model.remove({age:{$lt:19}},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// ClassModel.remove({lessonName:/^面条/},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// Model.remove({name:/^哈/},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// });

// Model.remove({$and:[{age:{$gt:32}},{age:{$lt:40}}]},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// });

// 修改========================
// Model.update({name:'哈哈'},{age:120},{multi: true},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// 查找========================
// $gt(>)、$lt(<)、$lte(<=)、$gte(>=)、$ne(不等于)、$in(包含)、$or(或者)、$exists(是否存在)
// Model.find(arg1,arg2,func) // 查找条件==》返回的字段==》回调函数
// Model.find({},{},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// ClassModel.findById('5bc696fba1cd2322587d7f18',{lessonName:1,score:1},function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })



// var express = require('express')
// var app = express();
// ClassModel.find().then((data)=>{
//   app.get('/',function(req,res){
//     var str = '';
//     for(var i = 0;i < data.length;i++){
//       str+=`<p>课程名称是:${data[i]['lessonName']},分数是:${data[i]['score']}</p>`;
//     }
//     res.send(str);
//   })
//   app.listen(8989);
// }).catch((err)=>{
//   console.log(err)
// })










