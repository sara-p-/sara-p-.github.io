
// 1. Set up elements
// 2. Read/store positions
// 3. Onclick - randomize positions
// 4. Onclick - go back to original positions


// Setting up the Global Variables

var numberx;
var numbery;
var firstNumberX;
var firstNumberY;
var theCurrentPositions;
var currentpositionX;
var currentpositionY;


	// Functions that assign random numbers to the position of the elements:


// Setting up the elements:
var theThing = function() {
	for( i=0; i < 10; i++) {
		var theDiv = document.createElement("DIV");
		theDiv.className = "things";
		document.getElementById("thing").appendChild(theDiv);
	}
}
theThing();
var allThings = document.getElementsByClassName("things");

function randomPositionX() {
		for (i = 0; i < 10; i++) {
	  numberx = Math.floor(Math.random() * 800);
	  allThings[i].style.left = numberx + "px";
	}
}
function randomPositionY() {
		for (i = 0; i < 10; i++) {
	  numbery = Math.floor(Math.random() * 600);
	  allThings[i].style.top = numbery + "px";
	}
}


function resetX() {
	for (i = 0; i < 10; i++) {
  	allThings[i].style.left = "0px";
	}
}

function resetY() {
	for (i = 0; i < 10; i++) {
  	allThings[i].style.top = "0px";
	}
}

// function currentPosition() {
// 	for( i=0; i < 10; i++) {
// 		var currentpositionX = allThings[3].style.left;
// 		currentpositionY = allThings[i].style.top;	
// 		console.log("x= " + currentpositionX);
// 	}

// }
// currentPosition();

var currentpositionX = allThings[3].style.backgroundColor;
console.log("working");
console.log(allThings[0].style);

// Creating the cloud display class:
function cloudButton() {
	if(allThings[0].classList.contains("linear")) {
		for( i=0; i < 10; i++) {
			allThings[i].classList.remove("linear");
			allThings[i].classList.add("cloud");	
		}
		randomPositionX();
		randomPositionY();

	} else  {
		for( i=0; i < 10; i++) {
		allThings[i].classList.add("cloud");	
	}
		randomPositionX();
		randomPositionY();

	}		
}

// Creating the linear display class:
function linearButton() {
	if(allThings[0].classList.contains("cloud")) {
		for( i=0; i < 10; i++) {
			allThings[i].classList.remove("cloud");
			allThings[i].classList.add("linear");	
			}
			resetX();
			resetY();

	} 
		else  {
			for( i=0; i < 10; i++) {
			allThings[i].classList.add("linear");	
			}
			resetX();
			resetY();
		}		
}


// Reset button
function resetButton() {
	if(allThings[0].classList.contains("cloud")) {
			for( i=0; i < 10; i++) {
			allThings[i].classList.remove("cloud");	
			}
		resetX();
		resetY();
	} 
		else if(allThings[0].classList.contains("linear"))  {
			for( i=0; i < 10; i++) {
			allThings[i].classList.remove("linear");	
			}

			resetX();
			resetY();
		}
			else{
				resetX();
				resetY();
			}

}




