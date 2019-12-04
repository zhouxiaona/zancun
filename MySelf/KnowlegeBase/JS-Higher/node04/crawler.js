var http=require("http");
var cheerio=require("cheerio");
function getData(str){
    var $=cheerio.load(str);
    var arr=$(".link-dark");
    console.log(arr);
    var dataTemp=[];
    arr.each(function(k,v){
        // console.log($(v).text());
        var title=$(v).text();
        var obj={
            id:(k+1),
            content:title
        }
        dataTemp.push(obj);
    });
    console.log(dataTemp);
    return dataTemp;
}


var server=http.createServer(function(req,res){
    res.setHeader("Content-type","text/html;charset=utf-8");
    var dataUrl="http://ok.lanou3g.com/";
    http.get(dataUrl,function(ress){
        var str="";
        ress.on("data",function(chunk){
            str+=chunk;
        });
        ress.on("end",function(){
            // console.log(str);
            var data=getData(str);
            for(var i=0;i<data.length;i++){
                res.write(`<p>${data[i]['content']}</p>`);
            }
            res.end();
        });

    });

});
server.listen(8181);

