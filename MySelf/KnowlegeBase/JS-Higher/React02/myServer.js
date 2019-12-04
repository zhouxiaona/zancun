var express=require("express");
var bodyParser=require("body-parser");
//redux router axios
var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.sendFile(__dirname+"/ajax.html");
});

app.all("/post",function(req,res){
    console.log(req.body);
    var arr=[{name:"张三",age:19},{name:"张22",age:23},{name:"李44",age:34}];
    res.send(JSON.stringify(arr));
});

app.all("/*",function(req,res){
    if(req.url!="/favicon.ico"){
        res.sendFile(__dirname+"/"+req.url);
    }
});
app.listen(8888);
