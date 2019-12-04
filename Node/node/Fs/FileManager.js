var http = require('http');
var url = require('url');
var fs = require('fs');
var removeDir = require('./index.js')
var server = http.createServer(function(req,res){
  res.setHeader('Content-type','text/html;charset=utf-8');

  var delurl = url.parse(req.url,true).query.delurl;
  var purl = url.parse(req.url,true).query.purl;
  if(purl === undefined){
    purl = './'
  }
  console.log(delurl,'delurl=======',purl,'purl======');
  if(delurl !== undefined){
    removeDir.removeDir(delurl);
    res.write("<script>window.location.href='/'</script>");
  }

  var fsArr = fs.readdirSync(purl);
  res.write("<table border=''>");
  res.write("<tr><td>文件名</td><td>创建时间</td><td>操作</td></tr>")
  for(var i =0;i<fsArr.length;i++){
    var statUrl = purl+'/'+fsArr[i];
    var stat = fs.statSync(statUrl);
    var createTime = stat.ctime.getFullYear() + '年' + stat.ctime.getMonth()+"月"+stat.ctime.getDay()+"日";
    // console.log(stat,'stat=======');
    if(stat.isFile()){
      res.write(`<tr><td>${fsArr[i]}</td><td>${createTime}</td><td><a href="/?delurl=${statUrl}">删除</a></td></tr>`);
    }else{
      res.write(`<tr><td><a href='/?purl=${statUrl}'>${fsArr[i]}</a></td><td>${createTime}</td><td><a href="/?delurl=${statUrl}">删除</a></td></tr>`);
    }
  }
  res.write("</table>");
  res.end();
});
server.listen(3000)
