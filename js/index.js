//index.js

$(document).ready(function() {

"use strict";

$("#NAVFRAME").load("navbar.html");

/*slidestuff
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

document.getElementById("ButtonClickLeft").onclick = function() {
	showDivs(slideIndex -= 1);
};
document.getElementById("ButtonClickRight").onclick = function() {
	showDivs(slideIndex += 1);
};

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 6000); // Change image every 2 seconds
}

var msg = "hello sebi";
console.log(msg);*/


});