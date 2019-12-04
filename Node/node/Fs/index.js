var fs = require('fs')

// 写入文件 flag:a=>追加写入，不会覆盖 w=>写入，会覆盖  r=>读取,  默认w


 fs.writeFile('6.txt','我是6.txt的内容',{flag:'a'},function(err){
   if(err){
     return console.log(err)
   }else{
     console.log('写入成功')
   }
 })

// fs.appendFile('5.txt','我是5.txt的内容222',{flag:'w'},function(err){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log('写入成功5.txt')
//   }
// })

// 读取文件
// fs.readFile('1.txt',function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data.toString())
//   }
// })

// fs.readFile('1.txt','utf-8',function(err,data){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log(data)
//   }
// })

// 修改文件名
// fs.rename('1.txt','1_1.txt',function(err){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log('修改成功')
//   }
// });

// 删除文件
// fs.unlink('6.txt',function(err){
//   if(err){
//     return console.log(err);
//   }else{
//     console.log('删除成功');
//   }
// })

// 文件夹的创建
// fs.mkdir('test2',function(err){
//   if(err){
//     return console.log(err);
//   }else{
//     console.log('创建成功');
//   }
// });

// 文件夹的删除(空文件夹)
// fs.rmdir('test2',function(err){
//   if(err){
//     return console.log(err)
//   }else{
//     console.log('删除空文件夹成功')
//   }
// })

// 删除文件
function removeDir(src){
  var stat = fs.statSync(src)
  if(stat.isFile()){
    fs.unlinkSync(src)
  }else if(stat.isDirectory()){
    var fsArr = fs.readdirSync(src)
    for(var i = 0;i<fsArr.length;i++){
      var url = src+'/'+fsArr[i];
      var info = fs.statSync(url);
      if(info.isFile()){
        fs.unlinkSync(url)
      }else if(info.isDirectory()){
        removeDir(url)
      }
    }
    fs.rmdirSync(src)
  }
}
// removeDir('./test')

module.exports={
  removeDir
}









