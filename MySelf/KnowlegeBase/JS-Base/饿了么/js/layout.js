// firstpage------------------------------------------------------------------
// 左右两侧滑动事件

$(".firstpage .contentWrap .aside li").each(function(index){
	$(this).on("click",function(){
		$(".firstpage .contentWrap .aside li").css("background","#f3f5f7");
		$(this).css("background","#fff");
		var sums=0;
		for(var i=0;i<index;i++){
			sums+=$(".firstpage .contentWrap .right_side>li").eq(i).height();
		}
		$(".firstpage .right_side").off("scroll",init);
		$(".firstpage .right_side").scrollTop(sums);
	});
});

// 获取划上去的li标签的高度
function len(len){
	var sums=0;
	for(var i=0;i<=len;i++){
		// 画上去的li标签高度之和
		sums+=$(".firstpage .right_side>li").eq(i).height();
	}
	return sums;
}

function init(){
	if($(".firstpage .right_side").scrollTop()<len(0)){
		$(".firstpage .contentWrap .aside li").css("backgroundColor","#f3f5f7");
		$(".firstpage .contentWrap .aside li").eq(0).css("backgroundColor","#fff");
	}
	for(var i=1;i<$(".firstpage .contentWrap .aside li").length;i++){
		if($(".firstpage .right_side").scrollTop()>=len(i-1)　&&　$(".firstpage .right_side").scrollTop()<len(i)){
			$(".firstpage .contentWrap .aside li").css("backgroundColor","#f3f5f7");
			$(".firstpage .contentWrap .aside li").eq(i).css("backgroundColor","#fff");
		}
	}
}

$(".firstpage .right_side").on("scroll",function(){
	$(".firstpage .right_side").on("scroll",init);
});



// 第一页面购物车加按钮事件
$(".firstpage .adds").children("a:nth-of-type(2)").each(function(index){//这个this指的是每个li里的加号
	$(this).attr("isF","true");
	var allmoney=0;
	this.onclick=function(){
		//加按钮控制中间的件数和减按钮的出现
		var res=parseInt($(this).siblings("span").html());
		res++;
		$(this).siblings("span").html(res);
		$(this).siblings("a").css("display","block");
		$(this).siblings("a").css("transform","translateX(-1.2rem)");
		$(this).siblings("span").css("display","block");
		//加按钮控制购物车总的价钱
		allmoney=parseInt($(this).siblings("span").html())*parseInt($(this).parents(".adds").siblings(".price").children("span").html());
		$(this).parents(".adds").siblings(".none").html(allmoney);

		$(".firstpage .contentWrap .footer>p>span").html(sum());
		$(".thirdpage .footer>p>span").html(sum());
		//加按钮控制购物车页面的内容
		if(($(this).attr("isF"))=="true"){
			//开始创建
			var newli=document.createElement("li");
			newli.innerHTML="<h2></h2><a class='none'></a><div class='con'><span class='price'>￥<span>10</span></span><div class='adds'><a href='###'><svg class='icon' aria-hidden='true'><use xlink:href='#icon-removecircleoutline'></use></svg></a><span>1</span><a href='###'><svg class='icon' aria-hidden='true'><use xlink:href='#icon-add_circle'></use></svg></a></div></div>";
			var father=document.getElementById('zhouna');
			newli.className="sli";
			$(newli).attr("dadyName",index);
			father.appendChild(newli);
			$(".sli:last>h2").html($(this).parents(".adds").siblings("h2").html());
			$(".sli:last>.con>.price>span").html($(this).parents(".adds").siblings(".price").children("span:nth-of-type(1)").html());
			$(this).attr("isF","false");
		}
		//把父级的none值赋给子级的none
		$(dady(index)).children(".none").html(allmoney);
		//控制购物车页面的件数
		$(dady(index)).children(".con").children(".adds").children("span").html($(this).siblings("span").html());
		
	}
});

// 第一页面购物车减按钮事件
$(".firstpage .adds").children("a:nth-of-type(1)").each(function(index){
	this.onclick=function(){
		var res1=parseInt($(this).siblings("span").html());
		res1--;
		if(res1<=0){
			res1=0;
			$(this).css("display","none");
			$(this).siblings("span").css("display","none");
			$(dady(index)).remove();
			$(this).siblings("a").attr("isF","true");
		}
		$(this).siblings("span").html(res1);
		//减按钮控制购物车总的价钱
		allmoney=parseInt($(this).siblings("span").html())*parseInt($(this).parents(".adds").siblings(".price").children("span").html());
		$(this).parents(".adds").siblings(".none").html(allmoney);
		//把父级的none值赋给子级的none
		$(dady(index)).children(".none").html(allmoney);

		$(".firstpage .contentWrap .footer>p>span").html(sum());
		$(".thirdpage .footer>p>span").html(sum());
		//控制购物车页面的商品个数
		$(dady(index)).children(".con").children(".adds").children("span").html($(this).siblings("span").html());

		

	}
});
//第一页面购物车总计函数,把每个小计相加
function sum(){
	var count=0;
	var nones2=$(".firstpage .right_side li ul li>.none");
	for(var i=0;i<nones2.length;i++){
		count+=Number(nones2[i].innerHTML);
	}
	return count;
}

function dady(index){
	var childs=$(".thirdpage #zhouna .sli");
	for(var i=0;i<childs.length;i++){
		if(($(childs[i]).attr("dadyName"))==index){
			return childs[i];
		}
	}
}

// ------------第一主页面与购物车页面的分界线------------------------------------------------------------------------------------

//第一页面购物车点击事件,购物车页面的出现
document.querySelector(".firstpage .contentWrap .footer .innerbox").onclick=function(){
	$(".firstpage").css("display","none");
	$(".thirdpage").css("display","block");
	shopping_cart();
}


function shopping_cart(){
	//购物车页面的加号按钮操作
	$(".thirdpage .wrap .inner ul .sli .adds a:nth-of-type(2)").each(function(index){ 
		var countmoney=0;
		this.onclick = function(){
			var resright=parseInt($(this).siblings("span").html());
			resright++;
			$(this).siblings("span").html(resright);
			// 控制主页面的个数
			var zz=$(this).parent(".adds").parent(".con").parent(".sli").attr("dadyName");
			$(son(zz)).siblings("span").html($(this).siblings("span").html());
			// 购物车页面的总计钱数
			countmoney=parseInt($(this).siblings("span").html())*parseInt($(this).parents(".adds").siblings(".price").children("span").html());
			$(this).parents(".adds").parents().siblings(".none").html(countmoney);
			// 把子级的none值给父级的none
			$(son(zz)).parent(".adds").siblings(".none").html($(this).parent(".adds").parent(".con").siblings(".none").html());
			$(".thirdpage .footer>p>span").html(sum2());
			$(".firstpage .contentWrap .footer>p>span").html(sum2());
		}
	});

	//购物车页面的减号按钮操作
	$(".thirdpage ul .sli .adds a:nth-of-type(1)").each(function(index){
		this.onclick=function(){
			var resleft=parseInt($(this).siblings("span").html());
			resleft--;
			$(this).siblings("span").html(resleft);
			var zz=$(this).parent(".adds").parent(".con").parent(".sli").attr("dadyName");
			// 控制主页面的个数
			$(son(zz)).siblings("span").html($(this).siblings("span").html());
			if(resleft<=0){
				resleft=0;
				$(son(zz)).attr("isF","true");
				$(son(zz)).siblings("a").css("display","none");
				$(son(zz)).siblings("span").css("display","none");
				$(this).parents(".sli").remove();
			}
			//购物车页面的总计钱数
			countmoney=parseInt($(this).siblings("span").html())*parseInt($(this).parents(".adds").siblings(".price").children("span").html());
			$(this).parents(".adds").parents().siblings(".none").html(countmoney);
			// 把子级的none值给父级的none
			$(son(zz)).parent(".adds").siblings(".none").html($(this).parent(".adds").parent(".con").siblings(".none").html());
			$(".thirdpage .footer>p>span").html(sum2());
			$(".firstpage .contentWrap .footer>p>span").html(sum2());
		}
	});
}


// 购物车页面的总计钱数
function sum2(){
	var value=0;
	var nones=$(".thirdpage #zhouna .sli .none");
	for(var i=0;i<nones.length;i++){
		value+=Number(nones[i].innerHTML);
	}
	return value;
}

function son(index){
	var dadys=$(".firstpage .right_side li ul li .adds a:nth-of-type(2)");
	for(var i=0;i<dadys.length;i++){
		dadys[i].indexs=i;
		if(dadys[i].indexs==index){
			return dadys[i];
		}
	}
}


//第二张店铺详情信息页面的产生
$(".firstpage .header").click(function(){
	$(this).parents(".firstpage").css("display","none");
	$(this).parents(".firstpage").siblings(".secondpage").css("display","block");
});
// 商品页面界面的出现
$(".firstpage .contentWrap .right_side>li>ul>li>h2").each(function(){
	$(this).click(function(){
		$(".firstpage").css("display","none");
		$(".forthpage").css("display","block");
	});
});

//--------------------------------------------------------------------------
//secondpage
$(".secondpage .footer a").click(function(){
	$(this).parents(".secondpage").css("display","none");
	$(this).parents(".secondpage").siblings(".firstpage").css("display","block");
});

//--------------------------------------------------------------------------
//thirdpage
$(".thirdpage .wrap .footer .innerbox").click(function(){
	$(".thirdpage").css("display","none");
	$(".firstpage").css("display","block");
});

//--------------------------------------------------------------------------
//forthpage
$(".forthpage .wrap .top").click(function(){
	$(".forthpage").css("display","none");
	$(".firstpage").css("display","block");
});













