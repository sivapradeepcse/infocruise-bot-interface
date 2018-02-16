 $(document).ready(function() {
	var a="<div id='agent'>";
		var b="<div id='header' class='header' onclick='minimizechat()'>";
			var c="<div class='min-button' id='min-button' align='left'>";
				var e="<div class='disp-btn' id='disp-btn'>";
					var f="<span class='min-button' id='min-button' onclick='minimizechat()'><img src='https://cdn3.iconfinder.com/data/icons/line/36/subtract-512.png'></span>";
				var d="</div>";
			var g="</div>";
			var h="<div class='bot-title' id='bot-title'>InfoBot</div>";
		var i="</div>";
		var j="<iframe src='http://127.0.0.1:3000/' scrolling='no' frameborder='0' width='365' height='460' id='ifr'></iframe>";
	var k="</div>";
	var l="<div id='messenger-img' onclick='maximizechat()'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/2000px-Facebook_Messenger_logo.svg.png'></div>";
	$("body").append(a);
	$("#agent").append(b);
	$("#header").append(c);
	$("#min-button").append(e);
	$("#header").append(d);
	$("#disp-btn").append(f);
	$("#header").append(g);
	$("#header").append(h);
	$("#agent").append(i);
	$("#agent").append(j);
	$("#body").append(k);
	$("body").append(l);
	initial_load();
});

