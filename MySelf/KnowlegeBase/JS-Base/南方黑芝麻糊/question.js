
		
	
	
	
							//加载js
		var monkey = document.querySelector(".pageload img");
		var cloud = document.querySelector("#clouddd");
		var imgssss = document.getElementsByTagName("img");
		var slide = document.querySelector(".slide");
		var slide2 = document.querySelector(".slide2");
		var para = document.querySelector(".pageload p");
		var loadcount=0;
		var pageload = document.querySelector(".pageload");
//		pageload.style.display = "block";
		var arr1 =['bg.png','cloud1.png','cloud2.png','wk1.png','wk2.png','wk3.png'];
		var arr2 =['2-A.png','2-B.png','2-C.png','2-D.png','2-gou.png','2-shanye.png','2-tiwen.png','3-1.png','3-2.png','3-3.png','3-4.png','3-5.png','3-6.png','3-7.png','3-8.png','3-9.png','3-10.png','3-11.png','3-12.png','4-1.png','4-2.png','4-3.png','4-4.png','4-5.png','4-6.png','award-1.png','award-2.png','award-3.png','award-4.png','award-5.png','award-6.png','award-7.png','award-8.png','award-9.png','cha.png','failure-1.png','failure-2.png','failure.png','logo.png','secondPage-1.png','secondPage.png','success-1.png','success-2.png','success-3.png','success-4.png','success-5.png','success-6.png','success-7.png','success-8.png','success.png','pic1.png','pic2.png','pic3.png','pic4.png','pic5.png','pic6.png','pic7.png','pic8.png','pic9.png','pic10.png','pic11.png','pic12.png','pic13.png','pic14.png','pic15.png','pic16.png','pic17.png','pic18.png','pic19.png','pic20.png','pic21.png','pic22.png','pic23.png','pic24.png','pic25.png','pic26.png','pic27.png','pic28.png','pic29.png','pic30.png'];
		var isloadingg = false;	
			
//			两组图片预加载；
			var arrImg = [];
			var arr1Ct=0;
			for(var i=0;i<arr1.length;i++){
				var newIm = new Image();
				newIm.onload = function(){
					arr1Ct++;
					console.log(arr1Ct);
					if(arr1Ct==arr1.length){
						pageload.style.display = "none";
						firsPage.style.display = "block";
						isloadingg = true;
						
					}
				}
				newIm.src = "img/"+arr1[i];
				arrImg.push(newIm);
			}
//			
//			if(isloadingg){
//				var arr2Ct=0;
//				for(var i=0;i<arr2.length;i++){
//					var newIm = new Image();
//					newIm.onload = function(){
//					arr2Ct++;
//					if(arr2Ct==arr2.length){
//						pageload.style.display = "none";
//						firstPage.style.display = "block";
//						
//						
//					}
//				}
//			}
			
			
	
			
		
		var monkeyMove = setInterval(function(){
			setTimeout(function(){
				monkey.src = "img/wk2.png";
				cloud.src="img/cloud2.png";
			},200)
			setTimeout(function(){
				monkey.src = "img/wk3.png";
				cloud.src="img/cloud1.png";
			},400)
			setTimeout(function(){
				monkey.src = "img/wk1.png";
				cloud.src="img/cloud2.png";
			},600)
		},600)
	
	

		
	
	
							//firsPage
		var firsPage = document.querySelector(".fisrtPage");
		var fPclick = document.querySelector(".fPim8");
		fPclick.onclick = function(){
			firsPage.style.display = "none";
			secondPage.style.display ="block";
		}
		
						//secondPage
		var secondPage = document.querySelector(".secondPage");
		var spClick = document.querySelector(".secondPage img");
		spClick.onclick = function(){
			secondPage.style.display = "none";
			container.style.display = "block";
		}
		
		
	
	
	
							//问答js
	
		var questionList = {
brand: [
        {question: '“黑~芝麻糊~~~哎”,南方黑芝麻的经典广告片“叫卖篇”哪一年在电视上风靡全国？', answer:[["2046年",0],["1990年",0],["1991年",1],["1997年",0]],srrc: "pic22.png"},
        {question: '“南方黑芝麻”品牌发源地在哪里呢？', answer:[["南极",0],["南山南",0],["广西南宁",0],["广西容县",1]],srrc: "pic24.png"},
        {question: '砖家建议，一天吃多少克黑芝麻为宜？', answer:[["30-40g",0],["90-100g",0],["10-15g",1],["想吃多少吃多少",0]],srrc: "pic23.png"},
        {question: '下面不属于黑芝麻功能特性的是？', answer:[["抗衰老",0],["提高生育能力",0],["黑头发",0],["得道成仙",1]],srrc: "pic25.png"},
        {question: '100g黑芝麻的含钙量是100g牛奶含钙量的多少倍？', answer:[["100倍",0],["10倍",0],["7.5倍",1],["15倍",0]],srrc: "pic26.png"},
        {question: '南方黑芝麻糊2015年的最新广告片“音乐篇”中，翩翩起舞的女主角身穿什么颜色的裙子呢？', answer:[["黑色",0],["黄色",1],["蓝色",0],["粉色",0]],srrc: "pic27.png"},
        {question: '这是一道送分题，双12晚上，几点几分锁定浙江卫视可以看南到方黑芝麻糊冠名的《西游奇遇记》首播？', answer:[["20：20",1],["20：10",0],["20：00",0],["20：30",0]],srrc: "pic28.png"},
        {question: '南方黑芝麻糊冠名的《西游奇遇记》里金星老师扮演的是？', answer:[["白龙马",0],["女儿国国王",0],["太白金星",1],["观音菩萨",0]],srrc: "pic29.png"},
        {question: '南方黑芝麻糊冠名的《西游奇遇记》首站在哪里拍摄的？', answer:[["花果山",0],["西安",1],["火焰山",0],["北京",0]],srrc: "pic30.png"}
    ],

				xiyou: [{
						question: '牛魔王的老婆“铁扇公主”又名？',
						answer: [
							["小甜甜", 0],
							["红佛女", 0],
							["药叉女", 0],
							["罗刹女", 1]
						],
						srrc: "pic1.png"
					}, {
						question: '八戒为什么长的像个猪？',
						answer: [
							["整容失败", 0],
							["他本来就那模样", 0],
							["投错了胎", 1],
							["他喜欢猪，故意变成这样", 0]
						],
						srrc: "pic2.png"
					}, {
						question: '玉皇大帝和王母娘娘到底什么关系？',
						answer: [
							["夫妻", 0],
							["母子", 0],
							["同事", 1],
							["不清不楚的关系", 0]
						],
						srrc: "pic3.png"
					}, {
						question: '黑熊精偷了唐僧的袈裟是为什么？',
						answer: [
							["别人的就是好的", 0],
							["开生日趴体", 1],
							["穿的拉轰、能泡妞", 0],
							["金光闪闪，壕气", 0]
						],
						srrc: "pic4.png"
					}, {
						question: '二郎神和玉帝是什么关系？',
						answer: [
							["父子", 0],
							["叔侄", 1],
							["基友", 0],
							["蓝朋友", 0]
						],
						srrc: "pic5.png"
					}, {
						question: '菩提始祖为什么轰走了孙悟空？',
						answer: [
							["猴子吃的太多", 0],
							["猴子长的太帅", 0],
							["猴子是逗逼", 0],
							["猴子装逼", 1]
						],
						srrc: "pic6.png"
					}, {
						question: '白龙马是谁的儿子?',
						answer: [
							["东海龙王", 0],
							["南海龙王", 0],
							["北海龙王", 0],
							["西海龙王", 1]
						],
						srrc: "pic7.png"
					}, {
						question: '通天河里的妖怪原本是观音菩萨池塘里的哪条鱼？',
						answer: [
							["鲤鱼", 1],
							["鲶鱼", 0],
							["金鱼", 0],
							["金龙鱼", 0]
						],
						srrc: "pic8.png"
					}, {
						question: '孙悟空师从何处？',
						answer: [
							["唐僧", 0],
							["菩提老祖", 1],
							["自学成才", 0],
							["太白金星", 0]
						],
						srrc: "pic9.png"
					}, {
						question: '西游记是谁写的？',
						answer: [
							["吴承恩", 1],
							["吴奇隆", 0],
							["吴孟达", 0],
							["吴彦祖", 0]
						],
						srrc: "pic10.png"
					}, {
						question: '原著中的孙悟空和下面哪个明星身高最接近？',
						answer: [
							["郭敬明", 1],
							["隔壁老王", 0],
							["何炅", 0],
							["黄晓明", 0]
						],
						srrc: "pic11.png"
					}, {
						question: '白龙马和被哪吒扒皮的龙三太子是什么关系？',
						answer: [
							["堂兄弟", 1],
							["男朋友", 0],
							["大舅舅", 0],
							["好基友", 0]
						],
						srrc: "pic12.png"
					}, {
						question: '当年是哪个妖精先谣言“吃唐僧肉可长生不老”？',
						answer: [
							["黑熊怪", 0],
							["蛇精男", 0],
							["狮驼洞三怪", 0],
							["金角大王", 1]
						],
						srrc: "pic13.png"
					}, {
						question: '要进盘丝洞，要先喊？',
						answer: [
							["傅文佩，你开门啊", 0],
							["芝麻开门", 1],
							["我是盘丝大仙", 0],
							["妖精，哪里逃！", 0]
						],
						srrc: "pic14.png"
					}, {
						question: '猪八戒前身“天蓬元帅”在天庭任什么职？',
						answer: [
							["总政少将", 0],
							["陆军军委", 0],
							["海军总司令", 1],
							["志愿兵", 0]
						],
						srrc: "pic15.png"
					}, {
						question: '红孩儿的真实年纪是？',
						answer: [
							["5岁", 0],
							["300岁", 1],
							["500岁", 0],
							["100岁", 0]
						],
						srrc: "pic16.png"
					}, {
						question: '孙悟空大闹蟠桃会，变成谁的样子骗吃骗喝？',
						answer: [
							["王母娘娘", 0],
							["赤脚大仙", 1],
							["太上老君", 0],
							["太白金星", 0]
						],
						srrc: "pic17.png"
					}, {
						question: '因为谁导致唐僧赶走孙悟空？',
						answer: [
							["孔雀公主", 0],
							["白骨精", 1],
							["狐狸精", 0],
							["金鼻白毛鼠精", 0]
						],
						srrc: "pic18.png"
					}, {
						question: '下列人物中没有喝过“孙、八、僧”三人组的圣水的是？',
						answer: [
							["虎力大仙", 0],
							["鹿力大仙", 0],
							["羊力大仙", 0],
							["牛力大仙", 1]
						],
						srrc: "pic19.png"
					}, {
						question: '第一个想娶唐僧的女妖怪是？',
						answer: [
							["凤姐", 0],
							["琵琶精", 1],
							["蝎子精", 0],
							["玉兔精", 0]
						],
						srrc: "pic20.png"
					}, {
						question: '太上老君的御用炼丹炉童子是？',
						answer: [
							["青狮魔王&白象魔王&大鹏魔王&虎威魔王", 0],
							["奔波儿灞&灞波儿奔", 0],
							["金角大王&银角大王", 1],
							["辟寒大王&辟暑大王&辟尘大王", 0]
						],
						srrc: "pic21.png"
					}

				]

			}
			//		console.log(questionList.brand[0].question);
		var ques = document.querySelector(".e1 p");
		var ans = document.querySelectorAll(".container p");
		var lev = document.querySelector(".e1 span");
		var qimg = document.querySelector(".e2 img");
		var container = document.querySelector(".container");

		var count = 0;
		var count2=0;
		var rd;
		var allowC = true;
		var record =0;
		questionAgain();
		function questionAgain(){
		//进入页面后，已经生成好10到随机题目--finalTen；
		
				//取3个brand
		var arrThree = getDifferent(0,9,3);
        var newTen=[];
        var finalTen=[];//最终得到问题的这个数组；
		for(var i=0;i<arrThree.length;i++){
			newTen.push(questionList.brand[arrThree[i]]);
		}
		
		//取7个xiyou；
		var arrSeven = getDifferent(0,21,7);
		for(var i=0;i<arrSeven.length;i++){
			newTen.push(questionList.xiyou[arrSeven[i]]);
		}
		
		var newIndex =getDifferent(0,10,10);
		
		for(var i=0;i<newIndex.length;i++){
			finalTen.push(newTen[newIndex[i]]);
		}
		
//		console.log(finalTen[0]);
		
		
		
		
		
		next(0);
		
	
		for(var k = 1; k < ans.length; k++) {
			ans[k].onclick = function() {
				if(allowC) {
					allowC = false;
					//答案正确，进入下一题，新建一个√
					if(this.cc == 1) {
						record++;
						failureSore1.innerText = record;
						failureSore2.innerText = record;
						successSore1.innerText = record;
						successSore2.innerText = record;
						var newImg = document.createElement("img");
						newImg.src = "img/2-gou.png";
						newImg.id = "correctt";
						this.appendChild(newImg);
						var rem = setInterval(function() {
							newImg.remove();
							 	next(count2);
							 	allowC = true;
							 	console.log(record);
								clearTimeout(rem);
						}, 1000)

					} else {
						var newImg = document.createElement("img");
						newImg.src = "img/cha.png";
						newImg.id = "correctt";
						this.appendChild(newImg);
						var rem = setInterval(function() {
							newImg.remove();
							next(count2);
							allowC = true;
							clearTimeout(rem);
						}, 1000)
					}
				}

			}
		}

		function next(n) {
			var ansR=getDifferent(0,4,4);
			count++;
			count2++;
			if(count2<=10){
			var str = finalTen[n].question;
			ques.innerText = str;
			lev.innerText = 0 + "" + parseInt(count / 10) + count % 10 + "";
			qimg.src = "img/" + finalTen[n].srrc + "";

			for(var i = 1; i < ans.length; i++) {
				ans[i].innerText = finalTen[n].answer[ansR[i-1]][0];
				ans[i].cc = finalTen[n].answer[ansR[i-1]][1];
				ans[i].lens = finalTen[n].answer[ansR[i-1]][0].length;
				
			}
			
//			 var longest = Math.max(ans[1].lens,ans[2].lens,ans[3].lens,ans[4].lens);
			
			for(var i = 1; i < ans.length; i++) {
				if(ans[i].lens < 11) {
					ans[i].style.fontSize = "1.8em";
				}else if(ans[i].lens >= 11 && ans[i].lens< 19) {
					ans[i].style.fontSize = "1.2em";

				}else if(ans[i].lens>=19){
					ans[i].style.fontSize = "0.8em";
				}
				}


			if(str.length < 13) {
				ques.style.fontSize = "2em";
			} else if(str.length >= 13 && str.length <= 20) {
				ques.style.fontSize = "1.5em";

			} else if(str.length > 20 && str.length <= 30) {
				ques.style.fontSize = "1.2em";
			}else if(str.length>30){
				ques.style.fontSize = "1em";
			}
			}else{
				container.style.display = "none";
				if(record<8){
					failure.style.display = "block";
				}else{success.style.display="block";}
				
			}
		}
		

	}


				
			//failure
			var failureSore1 = document.querySelector(".failureSpan1"),
				failureSore2 = document.querySelector(".failureSpan2"),
				failureclick = document.querySelector(".failureim1"),
				failure = document.querySelector(".failure");
				
			
			failureclick.onclick = function(){
				container.style.display = "block";
				failure.style.display = "none";
				count = 0;
				count2=0;
		 		allowC = true;
				record =0;
				failureSore1.innerText = "";
				failureSore2.innerText = "";
				questionAgain();
			}
			
				
			//success
			var successSore1 = document.querySelector(".successSpan1"),
				successSore2 = document.querySelector(".successSpan2"),
				sim1 = document.querySelector(".successim1"),
				sim2 = document.querySelector(".successim2"),
				sim4 = document.querySelector(".successim4"),
				successclick = document.querySelector(".successim3"),
				successclick2 = document.querySelector(".successim5"),
				done = document.querySelector(".done"),
				sName = document.querySelector(".sName"),
				sTel = document.querySelector(".sTel"),
				sAddress = document.querySelector(".sAddress"),
				sbtn = document.querySelector(".sbtn"),
				success = document.querySelector(".success");
			var sArr = ["award-2.png","award-4.png","award-8.png"];
			var sIsfirst = true;
			var sim6, sim7, sim8, sim9, sim10;
			var sif89=false;
			var sif67=false;
			var sif10=false;
			successclick.onclick = function(){
				container.style.display = "block";
				success.style.display = "none";
				count = 0;
				count2=0;
		 		allowC = true;
				record =0;
				failureSore1.innerText = "";
				failureSore2.innerText = "";
				questionAgain();
				done.style.display = "none";
				if(!sIsfirst){
					if(sif67){
					sim6.remove();
					sim7.remove();
					sif67 = false;
					}
					if(sif89){
					sim8.remove();
					sim9.remove();
					sif89 = false;
					}
					if(sif10){
					sim10.remove();
					sif10 = false;
					sim4.style.display="block";
					}
					
					sIsfirst = true;
				}
			}
			successclick2.onclick = function(){
				if(sIsfirst){
					sIsfirst = false;
				
				var rd = getRand(0,3);
				if(rd==2){
					sif89 = true;
					sim8 = new Image();
					sim8.className = "successim6";
					sim8.src = "img/"+sArr[rd]+"";
				 	sim9 = new Image();
					sim9.className = "successim8";
					sim9.src ="img/award-1.png";
					success.appendChild(sim8);
					success.appendChild(sim9);
					sim9.onclick = function(){
						sif10 = true;
						sim4.style.display="none";
						sim8.remove();
						sim9.remove();
					sim10 = new Image();
					sim10.className = "successim6";
					sim10.src = "img/award-6.png";
					success.appendChild(sim10);
					done.style.display = "block";
					
					
					}
				}else{
				sif67=true;
				sim6 = new Image();
				sim6.className = "successim6";
				sim6.src = "img/"+sArr[rd]+"";
				 sim7 = new Image();
				sim7.className = "successim7";
				sim7.src ="img/award-1.png";
				success.appendChild(sim6);
				success.appendChild(sim7);
				sim7.onclick = function(){
					if(getCookie("click")){
						alert("您已经领取过了");
					}
					sim6.remove();
					sim7.remove();
					setCookie("click","clicked",1)
				}
				}
			}

			}
			
					//提交表单cookie设置
					//设置正则格式；
				var tel = /^1[3，4，5，7，8]\d{9}$/;
				sbtn.onclick = function(){
					if(getCookie("tel")==sTel.value){
						alert("此手机号已经领取过了，亲！");
						return;
					}
					
					if(sName.value=""){
						alert("请输入姓名")
					}else if(!tel.test(sTel.value)){
						alert("请正确输入手机号码")
					}else if(sAddress.value=""){
						alert("请填写您的地址")
					}else{
						setCookie("name",sName.value,1);
						setCookie("tel",sTel.value,1);
						setCookie("address",sAddress.value,1);
						done.style.display = "none";
						if(sif10){
							sim10.remove();
						}
						alert("您已经领取成功，我们会尽快的将礼品寄送给您！")
						
					}
					
					
				}





//封装的函数；

		function newImg() {
			var newImg = document.createElement("img");
			newImg.id = "correctt";
		}

		function getRand(max, min) {
			return Math.floor(Math.random() * (max - min) + min);
		}
		
		function getDifferent(min,max,length1){
		 //min到max之间不相等的整数只有Max-min个，所以len的值最大就是Max-min；
		 if(length1>max-min){
		 	length1 = max - min;
		 }		 
		  var b = [];
		  while(b.length<length1){
		  	var rd = getRand(max, min);
		  	for(var i=0;i<b.length;i++){
		  		if(rd==b[i]){
		  			break;
		  		}
		  	}
		  	if(i==b.length){
		  		b.push(rd);
		  	}
		  }
		  return b; 
		}
					//cookie
			function getCookie(data){
			var ck = document.cookie;
			var arr1 = ck.split("; ");
			var arr2 = [];
			for(var i=0;i<arr1.length;i++){
				arr2.push(arr1[i].split("="));
			}
			for(var i=0;i<arr2.length;i++){
				if(arr2[i][0]==data){
					console.log(arr2[i][1]);
					return arr2[i][1];
					break;
				}
			}
			}
		
		
		function setCookie(name,value,tim){
			var now = new Date();
			var dat = now.getDate();
			now.setDate(dat+tim);
			document.cookie = name+"="+value+";expires="+now.toUTCString();
		}