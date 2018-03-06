//index.js

$(document).ready(function() {

"use strict";


var togglespace = $("#togglespace");
togglespace.toggle(0);


var toggleB = $("#Togglebutton");
toggleB.on("click", function() {
	togglespace.toggle(500);
	if(toggleB.text() == "Hide Game") toggleB.text("Show Game");
	else toggleB.text("Hide Game")    
	
	document.getElementById('scaled-framebio').setAttribute("src", "https://itch.io/embed-upload/746945?color=333333" );
	});
});