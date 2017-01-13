// Setting up the Global Variables
var i = 0;
var numberx;



// Creating the elements to play around with:
var theThing = function() {

	for( i=0; i < 10; i++) {
		var theDiv = document.createElement("DIV");
		theDiv.className = "things";
		document.getElementById("thing").appendChild(theDiv);
	}
}

theThing();


function makeRandomNumber() {

for (i = 0; i < 10; i++) {
  // Runs 5 times, with values of step 0 through 4.
  numberx = Math.floor(Math.random() * 500);
  console.log(numberx);

}
	return numberx;
}


makeRandomNumber();


// Creating the first display class:
function cloudButton() {
	allThings = document.getElementsByClassName("things");

	for( i=0; i < 10; i++) {
		allThings[i].classList.toggle("cloud");
		
		
	}
	// console.log(makeRandomNumber() + " top");
}



