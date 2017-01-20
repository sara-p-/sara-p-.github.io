
// Now I need to record the positions of the "line" elements, and pass it to the canvass


// Setting up the Global Variables
var allThings = document.getElementsByClassName("things");
var lineThings = document.getElementsByClassName("line");
var moveButton = document.getElementById("movebutton");
var otherButtons = document.getElementsByClassName("otherbuttons");
var thingWidth = allThings[0].clientWidth;
var thingHeight = allThings[0].clientHeight;
var moveX;
var moveY;
var numberx;
var numbery;
var counter = 0;


// Function to clear switch the different button classes:
function buttonClass(button, function1, function2) {
	if(allThings[0].classList.contains("linear")) {

		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("linear");		
			allThings[i].classList.add(button);	
		}
		function1;
		function2;
	} else if ( allThings[0].classList.contains("cloud") ) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("cloud");		
			allThings[i].classList.add(button);	
		}
		function1;
		function2;
	} else if ( allThings[0].classList.contains("move") ) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("move");		
			allThings[i].classList.add(button);	
		}
		function1;
		function2;
	} else {
		for( i=0; i < allThings.length; i++) {	
			allThings[i].classList.add(button);
		}
	function1;
	function2;

	}
}

function randomPositionX() {
	for (i = 0; i < allThings.length; i++) {
	  numberx = Math.floor(Math.random() * 800);
	  allThings[i].style.left =  numberx + "px";
	}
}

function randomPositionY() {
		for (i = 0; i < allThings.length; i++) {
	  numbery = Math.floor(Math.random() * 600);
	  allThings[i].style.top = numbery + "px";
	}
}

function randomMoveX() {
	 moveX = setInterval(frame1, 70);

		function frame1() {
			for (i = 0; i < allThings.length; i++) {
			  numberx = Math.floor(Math.random() * 500);
			  allThings[i].style.left =  numberx + "px";
			}
		}
}


function randomMoveY() {
	moveY = setInterval(frame2, 70);

		function frame2() {
			for (i = 0; i < allThings.length; i++) {
			  numbery = Math.floor(Math.random() * 500);
			  allThings[i].style.top =  numbery + "px";
			}
		}	
}




// Creating the resting display class:
function beginX(){
	if (allThings[0].classList.contains("things")) {
		var leftPosition = thingWidth;
		for( i=0; i < allThings.length; i+=1 ) {
			
			allThings[i].style.left = leftPosition + "px";
			allThings[i].style.top = "0px";
			leftPosition += 70;
		}

	}
}
beginX();

function beginY(){
	if (allThings[0].classList.contains("things")) {
		var topPosition = thingHeight;
		for( i=0; i < allThings.length; i+=1 ) {
			
			allThings[i].style.top = topPosition + "px";
			topPosition += 70;
		}
	}
}



// Creating the function to move the elements constantly
function theMoveButton() {
	buttonClass("move", "", "");

	if (counter < 1) {
		randomMoveX();
		randomMoveY();
		moveButton.innerHTML = "stop";
		counter += 1;
	}

	else if ( counter === 1 ) {
		moveButton.innerHTML = "move";
		clearInterval(moveX);
		clearInterval(moveY);
		counter = 0;
	} else {
		counter = 0;
	}

}

// Creating the cloud display class:
function cloudButton() {	
buttonClass("cloud", randomPositionX(), randomPositionY());
	clearInterval(moveX);
	clearInterval(moveY);
}

// Creating the linear display class:
function linearButton() {
	if(allThings[0].classList.contains("cloud")) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].style.left = "47%";
			allThings[i].classList.remove("cloud");
			allThings[i].classList.add("linear");	
			}
			beginY();
	} else if ( allThings[0].classList.contains("move") ) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].style.left = "47%";
			allThings[i].classList.remove("move");
			allThings[i].classList.add("linear");	
			moveButton.innerHTML = "move";	
			} 
			beginY();
		}	
		else  {
			for( i=0; i < allThings.length; i++) {
				allThings[i].style.left = "47%";
				allThings[i].classList.add("linear");	
			}
			beginY();
		}	

		clearInterval(moveX);
		clearInterval(moveY);	
}

// Reset button
function resetButton() {
	if(allThings[0].classList.contains("cloud")) {
			for( i=0; i < allThings.length; i++) {
				allThings[i].style.top = "0px";
				allThings[i].classList.remove("cloud");	
			}
		beginX();
	} 
		else if(allThings[0].classList.contains("linear"))  {
			for( i=0; i < allThings.length; i++) {
				allThings[i].style.top = "0px";	
				allThings[i].classList.remove("linear");
				
			}
			beginX();
		} else if ( allThings[0].classList.contains("move") ) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("move");		
			}
			beginX;
		}
			else{
				for( i=0; i < allThings.length; i++) {
					allThings[i].style.top = "0px";	
				}
				beginX();
			}
}




