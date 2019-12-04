var path=require("path");

// var urlPath="././////test/test1/..//index.php";
//把错误格式的路径地址进行融错，返回一个正确格式的地址
// var newPath=path.normalize(urlPath);
// console.log(newPath);

//进行地址拼接
// var newpath=path.join(__dirname,"test","test1/mycode","index.php");
// console.log(newpath);

//比上面的方法更能融错
var urlPath="test/test1/test.php";
var newpath=path.resolve(urlPath);
console.log(newpath);