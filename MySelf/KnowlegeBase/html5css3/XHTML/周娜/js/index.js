var inp1=document.getElementById('inp1');
var inp2=document.getElementById('inp2');
var a_arr=document.querySelectorAll('form>.inp_outer>a');
var inp_inner=document.getElementById('inp_inner');
var inp_outer=document.getElementById('inp_outer');
inp1.onfocus=function(){
			a_arr[0].style.display='none';
			a_arr[1].style.display='none';
			inp_inner.style.display="block";
			inp_outer.style.borderColor="#ff6700";
			inp2.style.borderColor="#ff6700";
}
// input框失去焦点事件
inp1.onblur=function(){
			a_arr[0].style.display='block';
			a_arr[1].style.display='block';
			inp_inner.style.display="none";
			inp_outer.style.borderColor="#e0e0e0";
			inp2.style.borderColor="#e0e0e0";
}