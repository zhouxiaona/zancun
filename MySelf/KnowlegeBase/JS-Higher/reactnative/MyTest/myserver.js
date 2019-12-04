var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.all("/getPost",function(req,res){
    console.log(req.body);
    res.send("111bsdsahahahahah");
});
app.listen(8989);

