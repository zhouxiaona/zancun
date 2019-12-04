//非阻塞==》异步
//阻塞==》同步
//单线程和多线程（js单线程）


var arr=[1,2,3,4];
var newarr=arr.map(function(v,k){
    return v+1;
});
console.log(newarr);
