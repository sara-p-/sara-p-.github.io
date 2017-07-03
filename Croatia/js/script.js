
console.log( "ready!" );

// $.stellar();

// Setting up the global variables
var imgOne = document.getElementById("background");
var imgTwo = document.getElementById("foreground");
// var currentLeft;
// var i;




// Creating the function that calculates the positioning of the img so that it's always in the center
function centerPos(imageVar) {
    var windowWidth = window.innerWidth;
    var windowHalf = windowWidth / 2;
    var imageWidth = imageVar.width;
    var imageHalf = imageWidth / 2;
    var imagePos = windowHalf - imageHalf;

    imageVar.style.left = imagePos + "px";

    return imageVar;
}

centerPos(imgOne);
centerPos(imgTwo);


// Creating the function that moves the first image to the left
function firstleftPos(imageVar) {
    var imagePos = parseInt(imageVar.style.left, 10);
    var newLeft = imagePos + 1;

    imageVar.style.left = newLeft + "px";
}

// Creating the function that moves the first image to the left
function secondleftPos(imageVar) {
    var imagePos = parseInt(imageVar.style.left, 10);
    var newLeft = imagePos - 1;

    imageVar.style.left = newLeft + "px";

    console.log(imagePos);
}

// Opposite functions
function firstrightPos(imageVar) {
    var imagePos = parseInt(imageVar.style.left, 10);
    var newLeft = imagePos - 1;

    imageVar.style.left = newLeft + "px";
}

// Opposite functions
function secondrightPos(imageVar) {
    var imagePos = parseInt(imageVar.style.left, 10);
    var newLeft = imagePos + 1;

    imageVar.style.left = newLeft + "px";

    console.log(imagePos);
}



// document.getElementsByTagName("BODY")[0].onscroll = function() {
//     var theScroll = window.pageYOffset;

//     if(theScroll < 30) {
//         firstleftPos(imgOne);
//         secondleftPos(imgTwo);
//     }

// };

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       // var theScroll = window.pageYOffset;

       if(st <= 30) {
           firstleftPos(imgOne);
           secondleftPos(imgTwo);
       }
   } else {
        // var theScroll = window.pageYOffset;

        if(st >= 31) {
            firstrightPos(imgOne);
            secondrightPos(imgTwo);
        }
      // upscroll code
   }
   lastScrollTop = st;
}, false);









// $(window).scroll(function() {
// 	myMove();
// 	myMovetwo();
// });

// function myMove() {
//     var elem = document.getElementById("box1"); 
//     var pos = 5;
//     var id = setInterval(frame, 100);
//     function frame() {
//         if (pos == 20) {
//             clearInterval(id);
//         } else {
//             pos++;  
//             elem.style.left = pos + 'px'; 
//         }
//     }
// }

// function myMovetwo() {
//     var elem = document.getElementById("box2"); 
//     var pos = 0;
//     var id = setInterval(frame, 100);
//     function frame() {
//         if (pos == 20) {
//             clearInterval(id);
//         } else {
//             pos++;  
//             elem.style.right = pos + 'px'; 
//         }
//     }
// }






