var querystring=require("querystring");
var obj={name:"张三",age:18,"height":"178cm"};

//把对象或者数组转成json串
var res=querystring.stringify(obj);
console.log(res);

//把get形式的字符串数据转成对象
var newobj=querystring.parse(res);
console.log(newobj);

//,做呈现的时候解决中文乱码
var res1=querystring.unescape(res);
console.log(res1);

//把对象用指定的符号进行连接
var data=querystring.stringify(obj,"*");
console.log(data);

//把数据用特定符号转换回来
var result=querystring.parse(data,"*");
console.log(result);

//把对象用指定的两个符号进行连接
var data1=querystring.stringify(obj,"*","?");
console.log(data1);

//把字符串转成乱码
var str="周娜";
var ss=querystring.escape(str);
console.log(ss);

