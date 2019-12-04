/*
 * @authors Your Name
 * @date    2016-05-19
 * @version 01 
 */

/*

知识点扩充：

每个函数都包含两个非继承而来的方法call()和apply()，这两个方法都是在特定的作用域中调用函数，等于设置函数体内this对象的值。

apply()方法接收两个参数：
第一个：指当前对象，也就是正在调用这个函数的对象
第二个：数组，例：fn.apply(this, ["name", "jeck"]);或数组对象，例：fn.apply(this, new Array("name", "jeck"));或arguments对象

call()方法接收两个参数：
第一个：指当前对象，也就是正在调用这个函数的对象
第二个：参数列表，例：fn.call(this, num1, num2, num3);

*/

function mouseWheel(obj, fn){

	//判断是否是火狐浏览器
	var ff = navigator.userAgent.indexOf("Firefox");
	if (ff != -1) {
		obj.addEventListener("DOMMouseScroll", wheel, false);
	}else{
		obj.onmousewheel = wheel;
	}
	
	function wheel(event){
		var event = event || window.event;	
		var down = true; //判断是否向下滚动

		if (event.preventDefault){ //清除默认事件
			event.preventDefault();
		}

		if (event.detail){ //FF
			down = event.detail < 0;
		}else{
			down = event.wheelDelta > 0;
		}
		
		fn.apply(obj,[event, down]); //注解：fn是作为参数传进来的函数，这里通过apply方法调用fn的同时，并将当前对象和所需参数赋给fn
		
		return false;
	}

}
