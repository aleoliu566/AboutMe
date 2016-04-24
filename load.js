$(document).ready(function(){
	$( "#result" ).load( "hagawan.html" );
	$("#atcc").click(function(){
		$( "#result" ).load( "atcc.html" );
	});
	$("#hagawan").click(function(){
		$( "#result" ).load( "hagawan.html" );
	});
	$("#hoperead").click(function(){
		$( "#result" ).load( "hoperead.html" );
	});

})