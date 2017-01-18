var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');
var inp = document.getElementsByTagName('input');
var XJ=document.getElementsByClassName('xj');
var p = document.getElementsByClassName("ptwo")[0];
sss();  //调用一次增加，减少，合计，删除函数
function sss(){
for(var i=0;i<inp.length;i++){
	right[i].onclick = function(){
	           var sl=this.previousElementSibling.value++;
		var xj=Number(this.parentNode.nextElementSibling.innerText);
		var dj=Number(this.parentNode.previousElementSibling.innerText);
		xj=((sl*dj)+dj).toFixed(1);
		console.log(xj);
		this.parentNode.nextElementSibling.innerText=xj;
		hj();
	};
	left[i].onclick = function(){
		if(this.nextElementSibling.value>0){
			var sl=this.nextElementSibling.value--;
			var xj=Number(this.parentNode.nextElementSibling.innerText);
			var dj=Number(this.parentNode.previousElementSibling.innerText);
			xj=((sl*dj)-dj).toFixed(1);
			this.parentNode.nextElementSibling.innerText=xj;
			hj();

		}else{
			this.nextElementSibling.value=0;
		}
	}
   }
   //删除行！！
var sc=document.getElementsByClassName('sc');
for(var i=0;i<sc.length;i++){
	sc[i].onclick=function(){
		var li=this.parentNode;
		var far=this.parentNode.parentNode;
		far.removeChild(li);
		hj();
	}
}
}
//合计的函数！！！
function hj(){
	var a=0;
	for(var i=0;i<inp.length;i++){
		a+=parseFloat(XJ[i].innerText);
		console.log(a);
	}
	     p.getElementsByTagName('strong')[0].innerText=Number(a.toFixed(1));//用div变量的申明strong的变量来获取其数值！！！	
}
//添加一行！！
var pone = document.getElementsByClassName('pone')[0];
var ul = document.getElementsByTagName('ul');
var all= document.getElementsByClassName('all')[0];
pone.onclick=function(){
	var dd=ul[4].cloneNode('<li class="sp">&nbsp;<img src="img/4.jpg" align="center">Casio/卡西欧EX-TR350</li><li class="dj">640.6</li><li class="sl"><span class="left">-</span><input type="text" value="0"><span class="right">+</span></li><li class="xj">0.0</li><li class="sc">删除</li>');
	all.appendChild(dd);
	hj();
	sss();
}
