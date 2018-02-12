 $(document).ready(function() {
	var div1 = "<div class='chatbox' id='chatbox'>";
	var div2="<div id='outer'>";
	var div3="<div id='inner'>";
	var div4="<iframe src='link here' scrolling='no' frameborder='0' width='400px' height='530px' id='ifr'></iframe>";
	var div5="</div>";
	var div6="</div>";
	var div7="<div id='minim-chat' onclick='minimChatbox()'><span class='minim-button'>&minus;</span></div>";
	var div8="<div id='maxi-chat' onclick='loadChatbox()'><span class='maxi-button'>&plus;</span></div>";
	var div9="</div>";
	$("body").append(div1);
	$("#chatbox").append(div2);
	$("#outer").append(div3);
	$("#inner").append(div4);
	$("#chatbox").append(div7);
	$("#chatbox").append(div8);
	initial_load();
});

