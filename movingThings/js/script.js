
// Now I need to record the positions of the "line" elements, and pass it to the canvass


// Setting up the Global Variables
var allThings = document.getElementsByClassName("things");
var lineThings = document.getElementsByClassName("line");
var moveButton = document.getElementById("gobutton");
var thingWidth = allThings[0].clientWidth;
var thingHeight = allThings[0].clientHeight;
var myXinterval;
var myYinterval;
var numberx;
var numbery;

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
	} else if ( allThings[0].classList.contains("go") ) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("cloud");		
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


// Creating the function to move the elements constantly
function goButton() {
	// if(allThings[0].classList.contains("linear")) {

	// 	for( i=0; i < allThings.length; i++) {
	// 		allThings[i].classList.remove("linear");		
	// 		allThings[i].classList.add("go");	
	// 	}
	// } else if ( allThings[0].classList.contains("cloud") ) {
	// 	for( i=0; i < allThings.length; i++) {
	// 		allThings[i].classList.remove("cloud");		
	// 		allThings[i].classList.add("go");	
	// 	}
	// } else {
	// 	for( i=0; i < allThings.length; i++) {	
	// 		allThings[i].classList.add("go");
	// }

	buttonClass("go", "", "");

	if( moveButton.innerHTML === "go" ) {
		moveButton.innerHTML = "stop";
	} else {
		moveButton.innerHTML = "go";
	}

	
	 	myXinterval = setInterval(randomPositionX, 500);
	 	myYinterval = setInterval(randomPositionY, 500);

	if( moveButton.innerHTML === "go" ) {
		clearInterval(myXinterval);
		clearInterval(myYinterval);
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

// Creating the cloud display class:
function cloudButton() {
	// if(allThings[0].classList.contains("linear")) {

	// 	for( i=0; i < allThings.length; i++) {
	// 		allThings[i].classList.remove("linear");		
	// 		allThings[i].classList.add("cloud");	
	// 	}
	// 	randomPositionX();
	// 	randomPositionY();

	// } else  {
	// 	for( i=0; i < allThings.length; i++) {
	// 	allThings[i].classList.add("cloud");	
	// }
	// 	randomPositionX();
	// 	randomPositionY();
	// }	
buttonClass("cloud", randomPositionY(), randomPositionX());


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
	} 
		else  {
			for( i=0; i < allThings.length; i++) {
				allThings[i].style.left = "47%";
				allThings[i].classList.add("linear");	
			}
			beginY();
		}		
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
				
				allThings[i].classList.remove("linear");
				allThings[i].style.top = "0px";	
			}
			beginX();
		}
			else{
				for( i=0; i < allThings.length; i++) {
					allThings[i].style.top = "0px";	
				}
				beginX();
			}
}




