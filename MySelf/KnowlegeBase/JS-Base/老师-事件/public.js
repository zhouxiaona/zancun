/************************************
**** 绑定事件的兼容写法
**** 参数：
****   element：代表要绑定事件的元素
****   type：要绑定的事件名（不含on）
****   fn：要绑定的事件对应的函数
*************************************/
function addEvent(element, type, fn){
	if(element.addEventListener){
		element.addEventListener(type, fn, false);
	} else if(element.attachEvent){
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;		
	}
}


/************************************
**** 解除绑定事件的兼容写法
**** 参数：
****   element：代表要绑定事件的元素
****   type：要绑定的事件名（不含on）
****   fn：要绑定的事件对应的函数
*************************************/
function removeEvent(element, type, fn){
	if(element.removeEventListener){
		element.removeEventListener(type, fn, false);
	} else if(element.detachEvent){
		element.detachEvent("on" + type, fn);
	} else {
		element["on" + type] = null;		
	}
}
/************************************
**** 取消冒泡
**** 参数：
****   e：要取消冒泡的事件对象
*************************************/
function stopBubble(e){
	if (e && e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}




