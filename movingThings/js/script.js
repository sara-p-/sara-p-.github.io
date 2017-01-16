
// 1. Set up elements
// 2. Read/store positions
// 3. Onclick - randomize positions
// 4. Onclick - go back to original positions


// Setting up the Global Variables
var allThings = document.getElementsByClassName("things");
var thingWidth = allThings[0].clientWidth;
var thingHeight = allThings[0].clientHeight;
var numberx;
var numbery;



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
	if(allThings[0].classList.contains("linear")) {

		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("linear");		
			allThings[i].classList.add("cloud");	
		}
		randomPositionX();
		randomPositionY();

	} else  {
		for( i=0; i < allThings.length; i++) {
		allThings[i].classList.add("cloud");	
	}
		randomPositionX();
		randomPositionY();
	}		
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




