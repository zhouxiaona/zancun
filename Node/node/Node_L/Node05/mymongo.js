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
var Schema=mongoose.Schema({
    name:{type:String},
    age:{type:Number,default:20}

},{collection:"person"});
var Model=db.model("person",Schema);

// Model.create({name:"王五",age:19}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });




















