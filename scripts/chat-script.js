

function minimizechat()
{
	document.getElementById("agent").style.display="none";
	document.getElementById("messenger-img").style.display="block";
}
function maximizechat()
{
	$( "#messenger-img" ).toggle( "bounce", { times: 4 }, "slow" );
setTimeout( function(){ 
    document.getElementById("agent").style.display="block";


	document.getElementById("messenger-img").style.display="none";
  }  , 2000 );
	
}