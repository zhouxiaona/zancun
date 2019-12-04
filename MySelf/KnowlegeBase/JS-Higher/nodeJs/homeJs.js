// 1.  ./  ==>引入文件
var test=require("./mytestjs");

console.log(test.a);
test.myfn();
console.log(test.a1);
test.myfn2();


//  2. （"http"）==>引入文件夹
//  ==== 2.1
//引入fnData模块(文件夹建立模块),引入文件夹
//改变fnData模块的主入口文件为test1.js文件===》fnData/package.json文件下的main:"test1.js"
// require("./fnData");

//  ==== 2.2
//引入node_modules文件夹,更规范
// require("commonfn");




