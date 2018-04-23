var canvas;
var ctx;
var down;
var s;

window.onload=function() {
	s=0;
    //canvas = document.getElementById("canvas");
    //ctx = canvas.getContext("2d");
	/*canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;*/
	document.addEventListener("mousedown", mouseDown);
	document.addEventListener("mousemove", mouseMove);
	document.addEventListener("mouseup", mouseUp);
	window.setInterval(timeDraw,200);
}

function timeDraw() {
	draw(0,(Math.sin(Math.ceil(s * 100)/100) * window.innerHeight/2)+window.innerHeight/2);
	s += 0.1;
    console.log(Math.sin(Math.ceil(s * 100)/100) * window.innerHeight);
}

function draw(x,y) {
	var r = document.createElement("marquee");
	var img = document.createElement("img");
	r.style.position="absolute";
	img.src="lol.gif";
	r.style.top=y - img.height/4;
	//r.style.left=x - img.width/4;
	r.appendChild(img);
	document.body.appendChild(r);
    //ctx.drawImage(img, x-img.width/2, y-img.height/2);
}

function mouseDown(event) {
  down=true;
  draw(event.x, event.y);
}

function mouseMove(event) {
	if(down)
	{
	var x = event.x;
    var y = event.y;

    //x -= canvas.offsetLeft;
    //y -= canvas.offsetTop;
	
	draw(x,y);
    console.log("cleeck");
	}
}

function mouseUp(event){
	down=false;
}
