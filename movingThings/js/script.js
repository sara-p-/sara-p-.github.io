



// Setting up the Global Variables
var allThings = document.getElementsByClassName("things");
var lineThings = document.getElementsByClassName("line");
var moveButton = document.getElementById("movebutton");
var otherButtons = document.getElementsByClassName("otherbuttons");
var box = document.getElementById("thing");
var thingWidth = allThings[0].clientWidth;
var thingHeight = allThings[0].clientHeight;
var moveX;
var moveY;
var numberx;
var numbery;
var counter = 0;
var canvas = document.getElementById("myCanvas");
var canvasWidth = box.clientWidth;
var canvasHeight = box.clientHeight;
var ctx = canvas.getContext("2d");
// var allCoords = lineCoords();
var lineX;
var lineY;
var left;
var top;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);



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
	// return numberx;
}

function randomPositionY() {
	for (i = 0; i < allThings.length; i++) {
	  numbery = Math.floor(Math.random() * 600);
	  allThings[i].style.top = numbery + "px";
	}
	// return numbery;
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

// THings
	// function lineCoords() {
	// 	for( i=0; i < allThings.length; i++) {
	// 		lineX = allThings[i].style.left;
	// 		lineY = allThings[i].style.top;	
	// 	}
	// 	return {lineX: lineX, lineY: lineY};
	// }

	// function drawLines( xcoord1, ycoord1, xcoord2, ycoord2 ) {
	// 	ctx.moveTo(xcoord1,ycoord1);
	// 	ctx.lineTo(xcoord2,ycoord2);
	// 	ctx.stroke();
	// }


// Function for drawing the lines
function lineDraw() {
	for( i=0; i < allThings.length; i+=2) {
		left1 = allThings[i].style.left;
		top1 = allThings[i].style.top;
		left2 = allThings[i+1].style.left;
		top2 = allThings[i+1].style.top;
		var x1 = parseInt(left1, 10) + 30;
		var y1 = parseInt(top1, 10) + 30;
		var x2 = parseInt(left2, 10) + 30;
		var y2 = parseInt(top2, 10) + 30;

		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();
	}
}

// Creating the cloud display class:
function cloudButton() {	
buttonClass("cloud", randomPositionX(), randomPositionY());
	clearInterval(moveX);
	clearInterval(moveY);




	if (counter < 1) {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.restore();
		lineDraw();
		ctx.save();
		counter += 1;
		console.log("1st");
	}

	else if ( counter === 1 ) {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		lineDraw();
		ctx.save();
		counter = 0;
		console.log("2nd");
	}
	else {
		counter = 0;
	}



	// var left1 = allThings[0].style.left;
	// var top1 = allThings[0].style.top;
	// var left2 = allThings[1].style.left;
	// var top2 = allThings[1].style.top;




	// console.log("x1 = " + x1 + ", " + "y1 = " + y1);	

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

// Creating the canvas and the moving lines
function linesButton() {
	ctx.moveTo(0,0);
	ctx.lineTo(400,100);
	ctx.stroke();

}


