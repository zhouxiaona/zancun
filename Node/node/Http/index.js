var http = require('http');
var querystring = require('querystring')
var url = require('url')
var fs = require('fs')

var server = http.createServer(function(req,res){
  var pathname = url.parse(req.url,true).pathname;
  var query = url.parse(req.url,true).query;
  console.log('pathname: ',pathname,'query: ',query);

  if(pathname == '/' || pathname == '/index'){
    var rs = fs.createReadStream('index.html');
    rs.pipe(res);
  }else if(pathname == '/post'){
    var str= '';
    req.on('data',function(chunk){
      str += chunk;
      console.log('str: ',str);
    });
    req.on('end',function(){
      var postObj = querystring.parse(str);
      console.log('postObj: ',postObj);
    })
  }else if(pathname == '/get'){
    var getObj = url.parse(req.url,true).query;
    res.write(JSON.stringify(getObj))
    // console.log('getObj: ',getObj);
    res.end();
  }else if(pathname != '/favicon.ico'){ // 加载其他文件
    var rs = fs.createReadStream('./' + pathname);
    rs.pipe(res);
  }
});

server.listen(8989);



// http 接收get
// var server = http.createServer(function(req,res){
//   // res.writeHeader(200,{"Content-type":"text/html;charset=utf8"});
//   var GetParse = {};
//   var urls = '';
//   console.log('访问服务器~~')
//   // if(req.url.indexOf('?') != -1){
//   //   var arr = req.url.split("?");
//   //   urls = arr[0];
//   //   GetParse = querystring.parse(arr[1]);
//   // }else{
//   //   urls = req.url
//   // }
//   GetParse = url.parse(req.url,true).query;
//   urls = url.parse(req.url,true).pathname;
//   console.log(urls,GetParse)
//   res.write('hello world');
//   res.end();
// });
// server.listen(8888)

// http 发送get
// var data = {
//   name:'周娜',
//   age:24
// }

// var content = querystring.stringify(data)
// var options = {
//   hostname:'localhost',
//   port:8888,
//   path:'/',
//   method:'Get'
// };

// var req = http.request(options,function(res){
//   console.log('STATUS: '+res.statusCode);
//   console.log('HEADERS: '+JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data',function(chunk){
//     console.log('BODY: '+ chunk);
//   });
// });

// req.on('error',function(e){
//   console.log('problem with request: '+ e);
// });

// req.end();

// http 接收post
// var postHTML =
//     '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//     '<body>' +
//     '<form method="post">' +
//     '网站名： <input name="name"><br>' +
//     '网站 URL： <input name="url"><br>' +
//     '<input type="submit">' +
//     '</form>' +
//     '</body></html>';
// var server = http.createServer(function(req,res){
//   var body = '';
//   req.on('data',function(chunk){
//     body += chunk;
//     console.log('chunk:',chunk)
//   })
//   req.on('end',function(){
//     body = querystring.parse(body)
//     console.log('body:',body)
//     res.setHeader('Content-type','text/html;charset=utf-8');
//     if(body.name && body.url){
//       res.write('网站名：'+body.name);
//       res.write('<br>')
//       res.write('网站：'+body.url);
//     }else{
//       res.write(postHTML)
//     }
//     res.end();
//   })
// })
// server.listen(8888)





