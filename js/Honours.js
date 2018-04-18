//index.js

$(document).ready(function() {

"use strict";

$("#NAVFRAME").load("navbar.html");

var togglespace = $("#togglespace");
togglespace.toggle(0);

var toggleB = $("#Togglebutton");
toggleB.on("click", function() {
	togglespace.toggle(500);
	if(toggleB.text() == "Hide Game") toggleB.text("Show Game");
	else toggleB.text("Hide Game")    
	
	document.getElementById('scaled-framewhack').setAttribute("src", "https://itch.io/embed-upload/842902?color=333333" );
	});
});