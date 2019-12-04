var express=require("express");
var app=express();

//ejs、jade模板引擎
//设置模板引擎的类型
app.set("view engine","jade");
//设置模板引擎路径
app.set("views",__dirname);

app.get("/",function(req,res){
    var arr=[{name:"张三",age:18},{name:"李四",age:20},{name:"lala",age:18}];
    var str="我是str字符串";
    res.render("test",{
        arr:arr,
        str:str
    });
});
app.listen(8686);