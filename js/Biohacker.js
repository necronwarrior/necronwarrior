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
	
	document.getElementById('scaled-framebio').setAttribute("src", "https://itch.io/embed-upload/746945?color=333333" );
	if(typeof AudioContext != "undefined" || typeof webkitAudioContext != "undefined") {
   var resumeAudio = function() {
      if(typeof g_WebAudioContext == "undefined" || g_WebAudioContext == null) return;
      if(g_WebAudioContext.state == "suspended") g_WebAudioContext.resume();
      document.removeEventListener("click", resumeAudio);
   };
   document.addEventListener("click", resumeAudio);
}
	});
	
	if(typeof AudioContext != "undefined" || typeof webkitAudioContext != "undefined") {
   var resumeAudio = function() {
      if(typeof g_WebAudioContext == "undefined" || g_WebAudioContext == null) return;
      if(g_WebAudioContext.state == "suspended") g_WebAudioContext.resume();
      document.removeEventListener("click", resumeAudio);
   };
   document.addEventListener("click", resumeAudio);
}
});