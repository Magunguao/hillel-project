  	var i = 1;
	var t = 1;
	
	function incScore(){
		document.getElementById("form").innerHTML = i;
		i = i + t;
}

	setInterval(incScore, 1000);

	function incTick(){
	if (i < 20){
		alert("Not enough gold!");
	} else {
		document.getElementById("form").innerHTML = i;
		i = i - 20;
		t++;
	}
}

