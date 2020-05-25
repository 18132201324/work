var box = document.getElementById("box");
var slider = document.getElementById("slider");
var oNavlist = document.getElementById("nav").children;
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	clearInterval(timer);
}
box.onmouseout = function(){
	timer = setInterval(next,3000);
}
for(var i = 0;i<oNavlist.length;i++){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index + 1;
		navmove();
		animate(slider,{left:-1920*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-1920*index},function(){
		if(index==4){
			slider.style.left = "-1920px";
			index=1;
		}
		isMoving= false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-1920*index},function(){
		if(index==0){
			slider.style.left = "-5760px";
			index=3;
		}
		isMoving= false;
	});
}
function navmove(){
	for(var i = 0;i<oNavlist.length;i++){
		oNavlist[i].id = "";
	}
	if(index > 3){
		oNavlist[0].id = "active";
	}else if(index<=0){
		oNavlist[2].id = "active";
	}else{
		oNavlist[index-1].id = "active";
	}
}
timer = setInterval(next,3000);