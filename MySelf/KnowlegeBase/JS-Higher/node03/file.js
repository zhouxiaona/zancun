//文件操作(基于fs模块)
//1.对文件的操作
//2.文件夹的操作（目录操作）

//文件操作,除了txt其他文件也可以操作
var fs=require("fs");
//创建
//flag:a==>追加写入，不会覆盖   w==>写入，会覆盖  r==>读取,  默认w
// fs.writeFile("11.txt","我是2.txt文件",{flag:"a"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("写入成功");
//     }
// });

//往文件中追加内容,如果文件不存在，则创建
// fs.appendFile("11.txt","我是追加的字符",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("追加成功");
//     }
// });

//所有同步的函数都是函数后面加Sync
// fs.writeFileSync("2.txt","我是写入的内容");

//文件的读取
// fs.readFile("2.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// });

//文件名的修改
// fs.rename("1.txt","5.txt",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("修改成功");
//     }
// });

//文件删除
// fs.unlink("2.txt",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("删除成功");
//     }

// });

//复制 （自己写）
// function mycopy(){
//     fs.readFile("5.txt",function(err,data){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("读取成功");
//             fs.writeFile("8.txt",data,function(err){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log("写入成功");
//                 }
//             });
//         }
//     });
// }
// mycopy();

// function mycopy2(src,dest){
//     fs.writeFileSync(dest,fs.readFileSync(src));
// }
// mycopy2(src,dest);


//文件夹操作/目录操作
//目录操作
//1.执行  2.写入   4.读取
//0==》18进制  7==>管理者  7==》staff  7==>everyone

// fs.mkdir("11",0777,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("创建成功");
//     }
// });

//修改文件夹权限
// fs.chmod("11",0777,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("修改权限成功");
//     }
// });

//修改鼠标创建的文件夹的权限
// fs.chmod("22",0777,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("修改权限成功");
//     }
// });


//修改文件夹名字
// fs.rename("11","33",function(err){
//     if(err){
//         return console.log(err);
//     }else{
//         console.log("修改成功");
//     }
// });


//判断文件或者文件夹是否存在
fs.exists("8.txt",function(exists){
    if(exists){
         console.log(exists);//true or false
    }else{
         // fs.mkdir("11",0777,function(err) {
         //     if (err) {
         //         console.log(err);
         //     } else {
         //         console.log("创建成功");
         //     }
         // });
    }
 });


//文件夹删除 ,只能删除空文件夹
// fs.rmdir("22",function(err){
//        if(err){
//            return console.log(err);
//        }else{
//            console.log("删除成功");
//        }
//     }
// )


//读取文件夹,返回的是此文件夹中的文件名，以数组的形式传过来
// fs.readdir("22",function(err,data){
//      if(err){
//         return console.log(err);
//      }else{
//          console.log(data);
//      }
// });


//显示文件的详细信息，再针对详细信息来判断是否是文件夹
// fs.stat("2.txt",function(err,data){
//      if(err){
//          return console.log(err);
//      }else{
//          console.log(data);
//          //判断是否是文件
//          var res=data.isFile();
//
//          //判断是否是文件夹
//          // var res1=data.isDirectory();
//
//          if(res){
//              console.log("是文件");
//          }else{
//              console.log("是文件夹");
//          }
//      }
// });

//我的删除文件夹,已知是文件夹了，继续删除里面的所有的文件以及文件夹
//删除文件夹的函数
var removeDir=function (src){
    //获取到文件夹里的内容
    var arr=fs.readdirSync(src);
    console.log(arr);
    //判断是否是文件，如是文件，就删除，如是文件夹，再执行相同的过程
    for(var i=0;i<arr.length;i++){
        //拿到子文件的详细信息
        //组装文件或者文件夹的路径
        var url=src+"/"+arr[i];
        var data=fs.statSync(url);
        //判断每个元素是文件或者是文件夹
        if(data.isFile()){
            // 是文件
            fs.unlinkSync(url);
        }else{
            // 是文件夹
            removeDir(url);
        }
    }
    //删除空的文件夹
    fs.rmdirSync(src);
}
// removeDir("33");

module.exports={
    removeDir
}




