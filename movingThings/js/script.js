



// Setting up the Global Variables
var allThings = document.getElementsByClassName("things");
var $allThings = document.getElementsByClassName("things");
var lineThings = document.getElementsByClassName("line");
var moveButton = document.getElementById("movebutton");
var otherButtons = document.getElementsByClassName("otherbuttons");
var box = document.getElementById("thing");
var thingWidth = allThings[0].clientWidth;
var thingHeight = allThings[0].clientHeight;
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
var moveX;
var moveY;
var cloudmoveX;
var cloudmoveY;
var numberx;
var numbery;
var counter = 0;
var moveCounter = 0;
var canvas = document.getElementById("myCanvas");
var $myCanvas = $('#myCanvas');
var canvasWidth = box.clientWidth;
var canvasHeight = box.clientHeight;
var ctx = canvas.getContext("2d");
var lineX;
var lineY;
var left;
var top;
var currentLeftPos;
var currentTopPos;
var currentX;
var currentY;
var randox;
var randoy;
var X1;
var X2;
var Y1;
var Y2;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);
$myCanvas.width(canvasWidth);
$myCanvas.height(canvasHeight);





// Function to clear switch the different button classes:
function buttonClass(button, function1, function2) {

	if(allThings[0].classList.contains("linear")) {
		moveCounter = 0;
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("linear");		
			allThings[i].classList.add(button);	
		}
		function1;
		function2;
	} 

	else if ( allThings[0].classList.contains("cloud") ) {
		moveCounter = 0;
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("cloud");		
			allThings[i].classList.add(button);	
		}
		function1;
		function2;
	} 

	else if ( allThings[0].classList.contains("move") ) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].classList.remove("move");		
			allThings[i].classList.add(button);	
		}
		function1;
		function2;
	} 

	else {
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

function randomPosX() {
	for (i = 0; i < allThings.length; i++) {
	  randox = Math.floor(Math.random() * 800);
	}
	return randox;
}

function randomPosY() {
	for (i = 0; i < allThings.length; i++) {
	  randoy = Math.floor(Math.random() * 600);
	}
	return randoy;
}

// Creating the function to move the elements constantly
function theMoveButton() {
	buttonClass("move", "", "");
	
	if (moveCounter < 1) {
		randomMoveX();
		randomMoveY();
		moveButton.innerHTML = "stop";
		moveCounter += 1;	
	}

	else if ( moveCounter === 1 ) {
		moveButton.innerHTML = "move";
		clearInterval(moveX);
		clearInterval(moveY);
		moveCounter = 0;	
	} 

	else {
		moveCounter = 1;
	}
	console.log(moveCounter);
}

// Function for drawing the lines
// function lineDraw() {
// 	for( i=0; i < allThings.length; i+=2) {
// 		left1 = allThings[i].style.left;
// 		top1 = allThings[i].style.top;
// 		left2 = allThings[i+1].style.left;
// 		top2 = allThings[i+1].style.top;
// 		x1 = parseInt(left1, 10) + 30;
// 		y1 = parseInt(top1, 10) + 30;
// 		x2 = parseInt(left2, 10) + 30;
// 		y2 = parseInt(top2, 10) + 30;


// 			ctx.beginPath();
// 			ctx.moveTo(x1,y1);
// 			ctx.lineTo(x2,y2);
// 			ctx.stroke();
		


// 	}

// }

// Function for drawing the lines
function lineDraw() {
	for( i=0; i < allThings.length; i+=2) {
		left1 = allThings[i].style.left;
		top1 = allThings[i].style.top;
		left2 = allThings[i+1].style.left;
		top2 = allThings[i+1].style.top;
		X1 = parseInt(left1, 10) + 30;
		Y1 = parseInt(top1, 10) + 30;
		X2 = parseInt(left2, 10) + 30;
		Y2 = parseInt(top2, 10) + 30;


			// ctx.beginPath();
			// ctx.moveTo(X1,Y1);
			// ctx.lineTo(X2,Y2);
			// ctx.stroke();

			$myCanvas.drawLine({
				name: "line1",
				group: ["lines"],
				layer: true,
				  strokeStyle: '#000000',
				  strokeWidth: 1,
				  x1: X1, 
				  y1: Y1,
				  x2: X2,
				  y2: Y2
			});


		


	}

}
var $theButton = $("#cloudbutton");

$theButton.addEventListener("click", function() {
	$myCanvas.animateLayerGroup("lines", {
		x1: 50, 
		y1: 100,
		x2: 200,
		y2: 400
	}, 500, "linear");

	console.log("on");
});

// function lineDrawings() {

// 	for( i=0; i < allThings.length; i+=2) {
// 		left1 = allThings[i].style.left;
// 		top1 = allThings[i].style.top;
// 		left2 = allThings[i+1].style.left;
// 		top2 = allThings[i+1].style.top;
// 		X1 = parseInt(left1, 10) + 30;
// 		Y1 = parseInt(top1, 10) + 30;
// 		X2 = parseInt(left2, 10) + 30;
// 		Y2 = parseInt(top2, 10) + 30;


		
// 		$myCanvas.drawLine({
// 		name: "line",
// 		group: ["lines"],
// 		layer: true,
// 		  strokeStyle: '#000000',
// 		  strokeWidth: 1,
// 		  x1: X1, 
// 		  y1: Y1,
// 		  x2: X2,
// 		  y2: Y2
// 		});


// 	}


// }

// function lineDrawing1() {

// 		left1 = allThings[0].style.left;
// 		top1 = allThings[0].style.top;
// 		left2 = allThings[1].style.left;
// 		top2 = allThings[1].style.top;
// 		X1 = parseInt(left1, 10) + 30;
// 		Y1 = parseInt(top1, 10) + 30;
// 		X2 = parseInt(left2, 10) + 30;
// 		Y2 = parseInt(top2, 10) + 30;


		
// 		$myCanvas.drawLine({
// 		name: "line1",
// 		group: ["lines"],
// 		layer: true,
// 		  strokeStyle: '#000000',
// 		  strokeWidth: 1,
// 		  x1: X1, 
// 		  y1: Y1,
// 		  x2: X2,
// 		  y2: Y2
// 		});
// }


// // Creating the cloud display class:
// function cloudButton() {
// 	counter = 0;	
// 	buttonClass("cloud", "", "");
// 	clearInterval(moveX);
// 	clearInterval(moveY);

// 	if (counter < 1) {
// 		randomPositionX();
// 		randomPositionY();
// 		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// 		setTimeout( function() {
// 			ctx.restore();
// 			lineDraw();
// 			ctx.save();
// 		}, 1000 );
// 		counter += 1;
// 	}

// 	else if ( counter === 1 ) {
// 		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// 		randomPositionX();
// 		randomPositionY();
// 		setTimeout( function() {
// 			lineDraw();
// 			ctx.save();
// 		}, 1000 );
// 		counter = 0;
// 		// console.log("2nd");
// 	}
// 	else {
// 		counter = 0;
// 	}
// }

function animateLine() {
	$myCanvas.animateLayerGroup("lines", {
		x1: 50, 
		y1: 100,
		x2: 200,
		y2: 400
	}, 500, "linear");

	console.log("on");
}
// Creating the cloud display class:
function cloudButton() {
	counter = 0;	
	buttonClass("cloud", "", "");
	clearInterval(moveX);
	clearInterval(moveY);
	
	if (counter < 1) {
		randomPositionX();
		randomPositionY();
		// ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		// setTimeout( function() {
		// 	ctx.restore();
		// 	lineDraw();
		// 	ctx.save();
		// }, 1000 );
lineDraw();

	animateLine();
	}

	else if ( counter === 1 ) {
		// ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		randomPositionX();
		randomPositionY();
		// setTimeout( function() {
		// 	lineDraw();
		// 	ctx.save();
		// }, 1000 );
		counter = 0;
		// console.log("2nd");
	}
	else {
		counter = 0;
	}
}


// Jquery to help with the animation easing:

function leftPos1() {
	for( i=0; i < allThings.length; i+=2) {
		left1 = allThings[i].style.left;
		X1 = parseInt(left1, 10) + 30;
	}
	return X1;
} 

function leftPos2() {
	for( i=0; i < allThings.length; i+=2) {
		left2 = allThings[i+1].style.left;
		X2 = parseInt(left2, 10) + 30;
	}
	return X2;
}

function topPos1() {
	for( i=0; i < allThings.length; i+=2) {
		top1 = allThings[i].style.top;
		Y1 = parseInt(top1, 10) + 30;
	}
	return Y1;
} 

function topPos2() {
	for( i=0; i < allThings.length; i+=2) {
		top2 = allThings[i+1].style.top;
		Y2 = parseInt(top2, 10) + 30;
	}
	return Y2;
} 

var $allLines = $("#myCanvas").getLayers();

// Creating the animate display class:
function animateButton() {
	counter = 0;	
	buttonClass("animate", "", "");
	clearInterval(moveX);
	clearInterval(moveY);
	

	if( counter < 1) {
		lineDrawings();
		counter += 1;
	}


	 $(".animate").each( function() {
	 	randomPosX();
	 	randomPosY();
	 	$(this).animate({
		left: randox,
		top: randoy
		}, 500, "linear", function() {

		});
		});

	 for( i=0; i < allThings.length; i+=2) {
	 	X1 = allThings[i].style.left;
	 	Y1 = allThings[i].style.top;
	 	X2 = allThings[i+1].style.left;
	 	Y2 = allThings[i+1].style.top;
	 
	 }
	

	 console.log(X1, Y2, X2, Y2);

	
		$myCanvas.animateLayer("line", {
			x1: X1, 
			y1: Y1,
			x2: X2,
			y2: Y2
		}, 500, "linear");
	
	
	
	 	
		
	 
		
	
}


// Creating the linear display class:
function linearButton() {
	moveCounter = 0;
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	if(allThings[0].classList.contains("cloud")) {
		for( i=0; i < allThings.length; i++) {
			allThings[i].style.left = "47%";
			allThings[i].classList.remove("cloud");
			allThings[i].classList.add("linear");	
			}
			beginY();
	} 

	else if ( allThings[0].classList.contains("move") ) {
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
	moveCounter = 0;
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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
		} 

		else if ( allThings[0].classList.contains("move") ) {
			for( i=0; i < allThings.length; i++) {
				allThings[i].classList.remove("move");		
			}
		beginX;
		}
			
			else {
				for( i=0; i < allThings.length; i++) {
					allThings[i].style.top = "0px";	
				}
			beginX();
			}
}

// Creating the canvas and the moving lines
// function linesButton() {
// 	ctx.moveTo(0,0);
// 	ctx.lineTo(400,100);
// 	ctx.stroke();

// }


// Fuction to animate allThings through JS:

// function leftPos() {
// 		currentLeftPos = allThings[0].style.left;
// 		curLeft = parseInt(currentLeftPos, 10);

// 	return curLeft;
// } 
// leftPos();
// console.log(curLeft);

// function topPos() {
// 	var curTop = [];
// 	for( i=0; i < allThings.length; i++ ) {
// 		currentTopPos = allThings[i].style.top;
// 		currentY = parseInt(currentTopPos, 10);

// 	}
// 	return curTop;
// } 

// function randomPosX() {
// 	for (i = 0; i < allThings.length; i++) {
// 	  numberx = Math.floor(Math.random() * 800);
// 	}
// 	return numberx;
// }

// function randomPosY() {
// 	for (i = 0; i < allThings.length; i++) {
// 	  numbery = Math.floor(Math.random() * 600);
// 	}
// 	return numbery;
// }

// var myVar;

// function draw() {
// 	myVar = setInterval(animateThings, 10);
// 	currentLeftPos = allThings[0].style.left;
// 	curLeft = parseInt(currentLeftPos, 10);
// 	currentTopPos = allThings[0].style.top;
// 	curTop = parseInt(currentTopPos, 10);
// 	numberx = Math.floor(Math.random() * 800);
// 	numbery = Math.floor(Math.random() * 600);
// 	console.log(numberx);
// }

// function animateThings() {


// 	if (curLeft >= numberx && curTop >= numbery) {
// 		clearInterval(myVar);
// 	}
// 	else {
// 		    curLeft += 5;
// 		    curTop += 5;
// 			allThings[0].style.left = curLeft + "px";
// 		    allThings[0].style.top = curTop + "px";
// 	}   
// }






// Fuction to animate allThings through JS:

	var curLeft = [];

// function leftPos() {

// 	for( i=0; i < allThings.length; i++ ) {
// 		curLeft = allThings[i].style.left;
// 		// curLeft = parseInt(currentLeftPos[i], 10);
// 	}
// 	return curLeft;
// } 
// leftPos();
// console.log(curLeft);

// function topPos() {
// 	var curTop = [];
// 	for( i=0; i < allThings.length; i++ ) {
// 		currentTopPos = allThings[i].style.top;
// 		currentY = parseInt(currentTopPos, 10);

// 	}
// 	return curTop;
// } 

// function randomPosX() {
// 	for (i = 0; i < allThings.length; i++) {
// 	  numberx = Math.floor(Math.random() * 800);
// 	}
// 	return numberx;
// }

// function randomPosY() {
// 	for (i = 0; i < allThings.length; i++) {
// 	  numbery = Math.floor(Math.random() * 600);
// 	}
// 	return numbery;
// }


// function animateThings() {

	
//     currentX += 5;
//     currentY += 5;
  
  
//      for(i = 0; i < allThings.length; i++) {
//      	allThings[i].style.left = currentX + "px";
//      	allThings[i].style.top = currentY + "px";
//      }
  
     
//     if (currentX >= numberx || currentY >= numbery) {
//         cancelAnimationFrame(animateThings);
//     }
     
//     requestAnimationFrame(animateThings);
// }

