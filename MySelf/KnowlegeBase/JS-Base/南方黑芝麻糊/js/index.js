// 回答问题页面
// 问题数组

//参数设置
//10个问题里面必须有３个芝麻糊的问题，７个西游的问题，并且问题的种类、答案的顺序是随机的
//定义函数产生指定范围并且指定个数的无重随机数
//*****************************************************************
var progress=document.getElementById("progress");
var pageImg1=["cha.png","2-gou.png","3-9.png","3-8.png","3-7.png","3-10.png","3-3.png","3-4.png","3-2.png","4-5.png","3-1.png","secondPage.png","secondPage-1.png","bg.png","2-tiwen.png","2-A.png","2-B.png","2-C.png","2-D.png","failure.png","failure-1.png","failure-2.png","success.png","success-8.png","success-4.png","success-1.png"];
//让第一个页面的图片预加载
var proValue=0;
var arrpage=[];
for(var i=0;i<pageImg1.length;i++){
	var readypic=new Image();
	readypic.src="img/"+pageImg1[i];
	arrpage.push(readypic);
	readypic.onload=function(){
		proValue++;
		progress.value=(proValue/pageImg1.length)*100;
		if(proValue==pageImg1.length){
			progress.style.display="none";
			progress.value=0;
			$(".firstpage").css("display","block");
		}
	}
}


function randomArr(min,max,length){
	var arr=[];
	while(arr.length<length){
		var num=parseInt(Math.random()*(max-min)+min);
		if(arr.indexOf(num)==-1){
			arr.push(num);
		}
	}
	return arr;
}

$(".page7").click(function(){
	$(this).parents(".firstpage").css("display","none");
	$(this).parents(".firstpage").siblings(".secondpage").css("display","block");
});
//定义选题大对象
var questionList = {
	brand: [
	        {question: '“黑~芝麻糊~~~哎”,南方黑芝麻的经典广告片“叫卖篇”哪一年在电视上风靡全国？', answer:[["2046年",0],["1990年",0],["1991年",1],["1997年",0]],srrc: "img/pic22.png"},
	        {question: '“南方黑芝麻”品牌发源地在哪里呢？', answer:[["南极",0],["南山南",0],["广西南宁",0],["广西容县",1]],srrc: "img/pic24.png"},
	        {question: '砖家建议，一天吃多少克黑芝麻为宜？', answer:[["30-40g",0],["90-100g",0],["10-15g",1],["想吃多少吃多少",0]],srrc: "img/pic23.png"},
	        {question: '下面不属于黑芝麻功能特性的是？', answer:[["抗衰老",0],["提高生育能力",0],["黑头发",0],["得道成仙",1]],srrc: "img/pic25.png"},
	        {question: '100g黑芝麻的含钙量是100g牛奶含钙量的多少倍？', answer:[["100倍",0],["10倍",0],["7.5倍",1],["15倍",0]],srrc: "img/pic26.png"},
	        {question: '南方黑芝麻糊2015年的最新广告片“音乐篇”中，翩翩起舞的女主角身穿什么颜色的裙子呢？', answer:[["黑色",0],["黄色",1],["蓝色",0],["粉色",0]],srrc: "img/pic27.png"},
	        {question: '这是一道送分题，双12晚上，几点几分锁定浙江卫视可以看南到方黑芝麻糊冠名的《西游奇遇记》首播？', answer:[["20：20",1],["20：10",0],["20：00",0],["20：30",0]],srrc: "img/pic28.png"},
	        {question: '南方黑芝麻糊冠名的《西游奇遇记》里金星老师扮演的是？', answer:[["白龙马",0],["女儿国国王",0],["太白金星",1],["观音菩萨",0]],srrc: "img/pic29.png"},
	        {question: '南方黑芝麻糊冠名的《西游奇遇记》首站在哪里拍摄的？', answer:[["花果山",0],["西安",1],["火焰山",0],["北京",0]],srrc: "img/pic30.png"}
	    ],

	xiyou: [{
			question: '牛魔王的老婆“铁扇公主”又名？',
			answer: [
				["小甜甜", 0],
				["红佛女", 0],
				["药叉女", 0],
				["罗刹女", 1]
			],
			srrc: "img/pic1.png"
		}, {
			question: '八戒为什么长的像个猪？',
			answer: [
				["整容失败", 0],
				["他本来就那模样", 0],
				["投错了胎", 1],
				["他喜欢猪，故意变成这样", 0]
			],
			srrc: "img/pic2.png"
		}, {
			question: '玉皇大帝和王母娘娘到底什么关系？',
			answer: [
				["夫妻", 0],
				["母子", 0],
				["同事", 1],
				["不清不楚的关系", 0]
			],
			srrc: "img/pic3.png"
		}, {
			question: '黑熊精偷了唐僧的袈裟是为什么？',
			answer: [
				["别人的就是好的", 0],
				["开生日趴体", 1],
				["穿的拉轰、能泡妞", 0],
				["金光闪闪，壕气", 0]
			],
			srrc: "img/pic4.png"
		}, {
			question: '二郎神和玉帝是什么关系？',
			answer: [
				["父子", 0],
				["叔侄", 1],
				["基友", 0],
				["蓝朋友", 0]
			],
			srrc: "img/pic5.png"
		}, {
			question: '菩提始祖为什么轰走了孙悟空？',
			answer: [
				["猴子吃的太多", 0],
				["猴子长的太帅", 0],
				["猴子是逗逼", 0],
				["猴子装逼", 1]
			],
			srrc: "img/pic6.png"
		}, {
			question: '白龙马是谁的儿子?',
			answer: [
				["东海龙王", 0],
				["南海龙王", 0],
				["北海龙王", 0],
				["西海龙王", 1]
			],
			srrc: "img/pic7.png"
		}, {
			question: '通天河里的妖怪原本是观音菩萨池塘里的哪条鱼？',
			answer: [
				["鲤鱼", 1],
				["鲶鱼", 0],
				["金鱼", 0],
				["金龙鱼", 0]
			],
			srrc: "img/pic8.png"
		}, {
			question: '孙悟空师从何处？',
			answer: [
				["唐僧", 0],
				["菩提老祖", 1],
				["自学成才", 0],
				["太白金星", 0]
			],
			srrc: "img/pic9.png"
		}, {
			question: '西游记是谁写的？',
			answer: [
				["吴承恩", 1],
				["吴奇隆", 0],
				["吴孟达", 0],
				["吴彦祖", 0]
			],
			srrc: "img/pic10.png"
		}, {
			question: '原著中的孙悟空和下面哪个明星身高最接近？',
			answer: [
				["郭敬明", 1],
				["隔壁老王", 0],
				["何炅", 0],
				["黄晓明", 0]
			],
			srrc: "img/pic11.png"
		}, {
			question: '白龙马和被哪吒扒皮的龙三太子是什么关系？',
			answer: [
				["堂兄弟", 1],
				["男朋友", 0],
				["大舅舅", 0],
				["好基友", 0]
			],
			srrc: "img/pic12.png"
		}, {
			question: '当年是哪个妖精先谣言“吃唐僧肉可长生不老”？',
			answer: [
				["黑熊怪", 0],
				["蛇精男", 0],
				["狮驼洞三怪", 0],
				["金角大王", 1]
			],
			srrc: "img/pic13.png"
		}, {
			question: '要进盘丝洞，要先喊？',
			answer: [
				["傅文佩，你开门啊", 0],
				["芝麻开门", 1],
				["我是盘丝大仙", 0],
				["妖精，哪里逃！", 0]
			],
			srrc: "img/pic14.png"
		}, {
			question: '猪八戒前身“天蓬元帅”在天庭任什么职？',
			answer: [
				["总政少将", 0],
				["陆军军委", 0],
				["海军总司令", 1],
				["志愿兵", 0]
			],
			srrc: "img/pic15.png"
		}, {
			question: '红孩儿的真实年纪是？',
			answer: [
				["5岁", 0],
				["300岁", 1],
				["500岁", 0],
				["100岁", 0]
			],
			srrc: "img/pic16.png"
		}, {
			question: '孙悟空大闹蟠桃会，变成谁的样子骗吃骗喝？',
			answer: [
				["王母娘娘", 0],
				["赤脚大仙", 1],
				["太上老君", 0],
				["太白金星", 0]
			],
			srrc: "img/pic17.png"
		}, {
			question: '因为谁导致唐僧赶走孙悟空？',
			answer: [
				["孔雀公主", 0],
				["白骨精", 1],
				["狐狸精", 0],
				["金鼻白毛鼠精", 0]
			],
			srrc: "img/pic18.png"
		}, {
			question: '下列人物中没有喝过“孙、八、僧”三人组的圣水的是？',
			answer: [
				["虎力大仙", 0],
				["鹿力大仙", 0],
				["羊力大仙", 0],
				["牛力大仙", 1]
			],
			srrc: "img/pic19.png"
		}, {
			question: '第一个想娶唐僧的女妖怪是？',
			answer: [
				["凤姐", 0],
				["琵琶精", 1],
				["蝎子精", 0],
				["玉兔精", 0]
			],
			srrc: "img/pic20.png"
		}, {
			question: '太上老君的御用炼丹炉童子是？',
			answer: [
				["青狮魔王&白象魔王&大鹏魔王&虎威魔王", 0],
				["奔波儿灞&灞波儿奔", 0],
				["金角大王&银角大王", 1],
				["辟寒大王&辟暑大王&辟尘大王", 0]
			],
			srrc: "img/pic21.png"
		}

	]
}

//定义各类参数
var arrThree=[];
var arrSeven=[];
var newTen=[];
var lastTen=[];
var answerIndex=[];
var indexArr=[];
var count;
var score;
var srcArr;
function review(){
	//生成各个数组取随机下标
	arrThree=randomArr(0,9,3);
	arrSeven=randomArr(0,21,7);
	newTen=[];
	lastTen=[];
	for(var i=0;i<arrThree.length;i++){
		newTen.push(questionList.brand[arrThree[i]]);
	}
	for(var i=0;i<arrSeven.length;i++){
		newTen.push(questionList.xiyou[arrSeven[i]]);
	}
	for(var i=0;i<newTen.length;i++){
		lastTen.push(newTen[i]);
	}
	//随机产生0-10的随机数来作为最终数组的下标数组，随机取lastTen里的元素
	indexArr=randomArr(0,10,10);
	//答案的随机坐标数组
	answerIndex=randomArr(0,4,4);
	//参数
	count=0;//点击次数 10
	score=0;//分数
}
//预加载每个问题下面的小图片函数,每一次的10道题的小图片-------------------------------------------------
function readyImage(count){
	srcArr=[];
	var readyNum=0;
	for(var i=0;i<lastTen.length;i++){
		var readyImg=new Image();
		srcArr.push(readyImg);
		readyImg.src=lastTen[indexArr[i]].srrc;
		readyImg.onload=function(){
			readyNum++;
			progress.value=(readyNum/lastTen.length)*100;
			if(readyNum==lastTen.length){
				progress.style.display="none";
				progress.value=0;
				newPage(count);
			}
		}
	}
}
//新页面方法
function newPage(arg){
	$(".questionpage").css("display","block");
	$(".questionpage").children(".top").children("span").html(arg+1);
	$(".questionpage").children(".top").children("p").html(function(){
		return lastTen[indexArr[arg]].question;
	});
	$(".questionpage").children(".middle").children("img").prop("src",function(){
		return srcArr[arg].src;
	});
	var lines=document.getElementsByClassName("line");
	for(var i=0;i<lines.length;i++){
		$(".questionpage").children(".line"+(i+1)).children("p").html(function(){
			return lastTen[indexArr[arg]].answer[answerIndex[i]][0];
		});
		$(".questionpage").children(".line"+(i+1)).children("p").siblings(".juge").css("display","none");
	}
}

//第一次生成问题页面时
$(".go").click(function(){
	$(this).parents(".secondpage").css("display","none");
	review();
	progress.style.display="block";
	readyImage(count);
});

// 点击重来一次
$(".lose1").click(function(){
	$(".questionpage").css("display","none");
	$(".winpage").css("display","none");
	$(".losepage").css("display","none");
	$(".firstpage").css("display","none");
	$(".secondpage").css("display","none");				
	review();
	progress.style.display="block";
	readyImage(count);
});
console.log(arrpage);
//点击方法,只执行一次
$(".line").children(".selects").each(function(index){
	$(this).click(function(){
		count+=1;
	
		//判断是对错
		if(lastTen[indexArr[count-1]].answer[answerIndex[index]][1]==0){//错误
			$(this).siblings(".juge").css("display","block");
			$(this).siblings(".juge").attr("src",arrpage[0].src);
		}else{//正确
			$(this).siblings(".juge").css("display","block");
			$(this).siblings(".juge").attr("src",arrpage[1].src);
			score+=1;
		}
		setTimeout(function(){
			if(count==10){
				$(".questionpage").css("display","none");
				if(score>=5){
					$(".winpage").css("display","block").children("p").children(".timu").html(score).siblings(".score").html(score);
				}else{
					$(".losepage").css("display","block").children("p").children(".timu").html(score).siblings(".score").html(score);
				}
			}
			if(count<10){
				newPage(count);
			}
		},200);
	});
});
