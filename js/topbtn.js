var mybutton = document.getElementById("top_btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrolltop > 20) {
		mybutton.style.display = "block";}
	else {
		mybutton.style.display = "block";}}
