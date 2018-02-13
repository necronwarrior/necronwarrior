//index.js

$(document).ready(function() {

"use strict";

var msg = "hello sebi";
console.log(msg);

var resultList = $("#resultslist");
resultList.text("this is jquery");

var toggleB = $("#Togglebutton");
toggleB.on("click", function() {
resultList.toggle(500);
if(toggleB.text() == "Hide") toggleB.text("Show");
else toggleB.text("Hide")
});

});