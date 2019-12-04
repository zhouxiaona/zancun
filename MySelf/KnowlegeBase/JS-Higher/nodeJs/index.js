var http=require("");
var server=http.creaeServer(function(req,res){
	res.write("hello world");
	res.end();
});
server.listen(8989);