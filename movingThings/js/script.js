// Setting up the Global Variables
var i = 0;
var numberx;
var numbery;



// Creating the elements to play around with:
var theThing = function() {
	for( i=0; i < 10; i++) {
		var theDiv = document.createElement("DIV");
		theDiv.className = "things";
		document.getElementById("thing").appendChild(theDiv);
	}
}
theThing();


var allThings = document.getElementsByClassName("things");



// Creating the first display class:
function cloudButton() {

	for( i=0; i < 10; i++) {
		allThings[i].classList.toggle("cloud");	
	}
	
	// Now I need a function that will assign random numbers to the position of the elements
	function randomPositionX() {
		for (i = 0; i < 10; i++) {
	  numberx = Math.floor(Math.random() * 800);
	  allThings[i].style.left = numberx + "px";
	
	}
	// return numberx;
}

	function randomPositionY() {
		for (i = 0; i < 10; i++) {
	  numbery = Math.floor(Math.random() * 600);
	  allThings[i].style.top = numbery + "px";
	}
	return numbery;
}


	randomPositionX();
	randomPositionY();


	
}




