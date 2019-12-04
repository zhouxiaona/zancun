var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')
var eventproxy = require('eventproxy')
var url = require('url')

var cnodeUrl = 'https://cnodejs.org/'

var app = express();

app.get('/',function(req,res,next){
  superagent.get(cnodeUrl).end(function(err,sres){
    if(err){return next(err)};
    var $ = cheerio.load(sres.text);
    var items = [];
    var resArr = [];
    $('#topic_list .cell').each(function(idx,ele){
      var $ele = $(ele);
      items.push({
        // title: $ele.children('.topic_title_wrapper').children('.topic_title').attr('title'),
        href: url.resolve(cnodeUrl,($ele.children('.topic_title_wrapper').children('.topic_title').attr('href'))),
        // author: $ele.children('.user_avatar').children().attr('title')
      }); 
    });
    // console.log(items)
    var ep = new eventproxy();
    ep.after('epFunc',items.length,function(epArr){
      epArr = epArr.map(function(epArrItem){
        var itemUrl = epArrItem[0];
        var itemHtml = epArrItem[1];
        var $$ = cheerio.load(itemHtml);
        return ({
          title: $$('.topic_full_title').text().trim(),
          href: itemUrl,
          comment1: $$('.reply_content').eq(0).text().trim()
        });
      });
      res.send(epArr);
    });
    items.forEach(function(item){
      superagent.get(item.href).end(function(err,sres){
        // if(err){return next(err)};
        ep.emit('epFunc',[item.href, sres.text]);
      });
    });
  });
});
app.listen(4000,function(){
  console.log('app is listening at port 4000');
});