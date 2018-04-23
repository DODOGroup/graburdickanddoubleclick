var slb;
var length=3;
var delay=5;
var timer;

function init() {
    slb=["ya","ye","yo","yu","ba","be","bi","bo","bu","ca","ce","ci","co","cu","che","chi","da","de","di","do","du","fa","fe","fi","fo","fu","ga","ge","gi","go","gu","ghe","ghi","gna","gne","gni","gno","gnu","la","le","li","lo","lu","ma","me","mi","mo","mu","na","ne","ni","no","nu","pa","pe","pi","po","pu","qu","ra","re","ri","ro","ru","sa","se","si","so","su","ta","te","ti","to","tu","va","ve","vi","vo","vu","za","ze","zi","zo","zu"];
	gen(length);
    wait(delay);
	var d= new Date();
	document.getElementById("copy").innerHTML = d.getFullYear();
	document.addEventListener("keypress", f);
}

function f(e){
	console.log(e.which)
	if(e.which == 92) {
		clearTimeout(timer);
		gen(length);
		timer=window.setTimeout(wait, 100, (delay).toFixed(1));
	}
}

function gen(l) {
    var psw="";
    for(var i = 0; i < l; i++)
        psw += slb[Math.floor(Math.random() * slb.length)];
    document.getElementById("psw").innerHTML = psw;
}

function wait(t) {
    if(t <= 0){ keyPressed = false; t = delay; gen(length); };
	
	t -= 0.1;
	document.getElementById("bar").style.width = (t / delay) * 100 + "%";
	document.getElementById("time").innerHTML = parseInt(t +1 );
	
	timer=window.setTimeout(wait, 100, (t).toFixed(1));
}