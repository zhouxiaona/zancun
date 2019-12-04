var http = require('http');
var url = require('url')
var querystring = require('querystring')
var server = http.createServer(function(req,res){
  var pathname = url.parse(req.url,true).pathname;
  var query = url.parse(req.url,true).query;
  console.log('pathname: ',pathname,'query: ',query,'__dirname',__dirname);
  // 设置头部规范
  res.setHeader("Content-type","text/html;charset=utf-8")
  if(pathname == '/' || pathname == '/index'){
    res.write("<h1>我是首页哈哈我是444</h1>");
  }else if(pathname == '/goods'){
    res.write('<h1>我是商品页面</h1>');
  }else{
    res.write('<h1>我是其他页面</h1>');
  }
  res.end()
})
server.listen(8888,function(){
  console.log('8888连接成功！！')
})