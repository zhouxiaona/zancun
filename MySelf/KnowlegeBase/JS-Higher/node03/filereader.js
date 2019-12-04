var fs=require("fs");
//异步
// fs.readFile("2.txt",function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         //将buffer转换成文字
//         console.log(data);
//         console.log(data.toString());
//     }
// });
//同步
var data=fs.readFileSync("2.txt","utf-8");
console.log(data);