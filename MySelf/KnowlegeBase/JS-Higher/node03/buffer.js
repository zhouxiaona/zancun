//如何创建一个buffer
//创建方式1
// var buffer=new Buffer(10);
// console.log(buffer);

//把指定的数字从指定的位置开始变成buffer到指定的位置,一般创建指定大小的文件
// buffer.fill(255,2,4);
// console.log(buffer);

//创建方式2
//通过字符串创建
// var buffer=new Buffer("大家好");
// console.log(buffer);

//把buffer数据转换成字符串
// console.log(buffer.toString());

//创建方式3
//通过数组创建buffer
var StringDecoder=require("string_decoder").StringDecoder;
var decoder=new StringDecoder();
// console.log(decoder);

// var buffer=new Buffer([0xe5,0xa4,0xa7,0xe5,0xae,0xb6,0xe5,0xa5,0xbd]);
// console.log(buffer.toString());


var buffer1=new Buffer([0xe5,0xa4,0xa7,0xe5,0xae]);
var buffer2=new Buffer([0xb6,0xe5,0xa5,0xbd]);
// console.log(buffer1.toString());
// console.log(buffer2.toString());



//处理乱码
var str=Buffer.concat([buffer1,buffer2]);
// console.log(str);
// console.log(str.toString());

var res=decoder.write(buffer1);
console.log(res);

var res2=decoder.write(buffer2);
console.log(res2);
