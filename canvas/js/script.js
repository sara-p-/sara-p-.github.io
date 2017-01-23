
var box = document.getElementById("wrapper");
var canvasWidth = box.clientWidth;
var canvasHeight = box.clientHeight;



var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");
 
canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
 
function drawCircle() {
 ctx.clearRect(0, 0, canvasWidth, canvasHeight);
   
  // color in the background
  // ctx.fillStyle = "#EEEEEE";
  // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
   
  // draw the circle
  ctx.beginPath();
   
  var radius = 25;
  ctx.arc(225, 225, radius, 0, Math.PI * 2, false);
  ctx.closePath();
   
  // color in the circle
  ctx.fillStyle = "#f2f2f2";
  ctx.fill();

      


  requestAnimationFrame(drawCircle);
}
drawCircle();