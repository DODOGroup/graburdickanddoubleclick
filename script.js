var list=["Bush","trololo","pswgen"];

function init() {
    for(var i = 0;i<list.length;i++){
		var l=list[i];
		document.getElementById("list").innerHTML+='<li><a href="'+l+'">'+l+"</a></li>";
	}
}