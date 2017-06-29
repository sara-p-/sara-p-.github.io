
console.log( "ready!" );

// $.stellar();

// var boxOne = $('#box1');
// var boxTwo = $('#box2');
// var boxonePos = boxOne.css();

$(window).scroll(function() {

	var boxOne = $('#box1');
	var boxTwo = $('#box2');
	var boxonePos = boxOne.css("left");
	var i = 1;
	do {
	    boxOne.css("left", function() {
	    	i += 1;
	    });
	    i++;
	}
	while (i < 10);
	var theOffset = $('.box').offset();
	console.log(theOffset);
	console.log(boxonePos);

});



