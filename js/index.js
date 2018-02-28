//index.js

$(document).ready(function() {

"use strict";

var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars"

$.get(gitHubSearch)
	.done(function(r){
	displayResults(r.items);
})
	.fail(function(err){
		console.log("Failed to connect to gitub");
})
	.always(function(){
		console.log("always activated");
});

var resultList = $("#resultslist");
resultList.text("this is jquery");

// var results = [{
	// name:"jQuery",
	// language:"JavaScript",
	// score: 4.5,
	// showLog: function(){
	
	// },
	// owner:{
		// login:"necronwarrior",
		// id:123456
	// }
// },{
	// name:"jQuery UI",
	// language:"JavaScript",
	// score: 3.5,
	// showLog: function(){
	
	// },
	// owner:{
		// login:"necronwarrior",
		// id:123456
	// }
// }];
	
function displayResults(results){
	resultList.empty();
	$.each(results,function(i,item){
		
		var newResult = $("<div class='result'>" +
		  "<div class='title'>" + item.name + "</div>" +
		  "<div>Language: " + item.language + "</div>" +
		  "<div>Owner: " + item.owner.login + "</div>" +
		  "</div>");
		  
		newResult.css('opacity','0.0');
		newResult.hover(function(){
			//darken
			$(this).animate({'opacity':'0.7'},100);
			$(this).css("background-color","lightgray");
		},function(){
			//reverse
			$(this).animate({'opacity':'0.0'},100);
			$(this).css("background-color","transparent");
		});
		
		resultList.append(newResult);
	});
}

//slidestuff
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

//buttonstuff
var msg = "hello sebi";
console.log(msg);


var toggleB = $("#Togglebutton");
toggleB.on("click", function() {
	resultList.toggle(500);
	if(toggleB.text() == "Hide") toggleB.text("Show");
	else toggleB.text("Hide")
	});

});