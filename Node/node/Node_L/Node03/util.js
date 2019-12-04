var util=require("util");
//inherits:实现原型的继承
function Dad(){
    this.name="张三";
    this.age=20;
    this.hobby=function(){
        console.log("吃鸡");
    }
}

Dad.prototype.money=function(){
    console.log("我有一个亿");
}
// Son.prototype=Dad.prototype;
//继承父级的原型，不会涉及传址,不会继承构造函数

util.inherits(Son,Dad);
function Son() {
    // 用call来继承父级的构造函数
    Dad.call(this);
    this.height = "178cm";
}

// var newson=new Son();
// newson.hobby();
// newson.money();

// var obj={name:"张三",age:18};
// console.log(typeof obj);


// //util.inspect(obj) 把对象转换成字符串
// var newstr=util.inspect(obj);
// console.log(typeof newstr,newstr);
//
// //判断是否是数组对象类型 php==>_array()
// var arr=['张三','李四','王二'];
// var res=util.isArray(arr);
// console.log(res);
//
// //判断是否是字符串类型 php==>istype()
// var res1=util.isString(arr);
// console.log(res1);



