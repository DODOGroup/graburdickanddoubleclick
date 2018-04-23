var canvas;
var ctx;
var step=1000;
var img;

window.onload=function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
	canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
	img=document.getElementById("gg");
	/*var x,y;
	for(x = step, y = window.innerHeight; x < window.innerWidth && y >= step; x += step, y-=step) {
		ctx.moveTo(0,y);
		ctx.lineTo(x,0);
		ctx.moveTo(0,y);
		//ctx.drawImage(document.getElementById("gg"),x,y);
	}*/
	setTimeout(upd, 2000);
	
	
	
	ctx.stroke();
}

function upd() {
	ctx.drawImage(img, Math.random() * window.innerWidth - img.width/2, Math.random() * window.innerHeight - img.height/2)
	ctx.stroke();
	step<=1?step*=0.999:step*=0.9;
	step<=0.5?step=0.5:step=step;
	setTimeout(upd,step);
}

