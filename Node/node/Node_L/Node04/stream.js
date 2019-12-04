//stream 流
var fs=require("fs");
// fs.readFile("3.txt","utf-8",function(err,data){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log(data);
//     }
// });

//获得的是buffer数据
// var res=fs.readFileSync("3.txt");
// console.log(res.toString());


//创建可读流
// var rs=fs.createReadStream("3.txt");
// // console.log(rs);
// // 监控流的过程
// var num=0;
// rs.on("data",function(chunk){
//     num++;
//     console.log(num);
//     console.log(chunk.toString());
// });

//创建文件
// var buffer=new Buffer(1024*129);
// fs.writeFile("1.txt",buffer,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("写入成功");
//     }
// });

//分割的小块文件是64k的文件
// var rs=fs.createReadStream("1.txt");
// var num=0;
// rs.on("data",function(chunk){
//     num++;
//     console.log(num);
//     // console.log(chunk.toString());
// });

//可写流
var ws=fs.createWriteStream("4.txt");
console.log(ws);
// //可读流
var rs=fs.createReadStream("1.txt");
rs.pipe(ws);

