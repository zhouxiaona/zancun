function test(){
	console.log(123);
}
Array.prototype.p = function(){
	console.log(this);
}

Array.prototype.double = function(fn){
	// this当前数组
	var newArr = [];
	for(var i = 0; i < this.length; i++){
		newArr.push(fn(this[i], i, this));
	}
	return newArr;
}






