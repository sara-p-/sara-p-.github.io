
// setting up the global variables
var box = document.getElementById("box");
// var tooth = document.getElementsByClassName("teeth");
// var ranPos;
var divNode;
var boxWidth = box.clientWidth;
var boxHeight = box.clientHeight;


makeTooth(200);
moveTeeth(200, 150);



function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};


function randomPosition() {
	return Math.floor(Math.random() * boxWidth);
}

function moveTeeth(num, speed) {
	if( num > 0 ) {
		setTimeout(function() {
			$("#tooth_" + randomInt(1, 200)).addClass("animate");
			num--;
			moveTeeth(num, speed);
		}, speed);
	}
}

function makeTooth(num) {
	if( num > 0 ) {
		var imgSrc = document.createAttribute("src");
		var imgClass = document.createAttribute('class');
		var imgId = document.createAttribute('id');
		var imgWidth = document.createAttribute("width");

		divNode = document.createElement("IMG");

		imgClass.value = "teeth";
		imgSrc.value = "../assets/tooth1.png";
		imgId.value = "tooth_" + num;
		imgWidth.value = randomInt(40, 80);

		divNode.setAttributeNode(imgClass);
		divNode.setAttributeNode(imgSrc);
		divNode.setAttributeNode(imgId);
		divNode.setAttributeNode(imgWidth);
		box.appendChild(divNode);

		divNode.style.transform = "rotate(" + randomInt(1, 180) + "deg)";
		divNode.style.left = randomPosition() + "px";
		num--;
		makeTooth(num);
	}

}





