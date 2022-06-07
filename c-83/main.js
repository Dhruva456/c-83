color=""
var line_width=""
last_x=""
last_y=""
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
if(screen.width<992){
    document.getElementById("mycanvas").width=screen.width-70
    document.getElementById("mycanvas").height=screen.height-300
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
    color=document.getElementById("colour").value
    line_width=document.getElementById("width").value
last_x=e.touches[0].clientX-canvas.offsetLeft
last_y=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e){

    mousex=e.touches[0].clientX-canvas.offsetLeft
    mousey=e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.moveTo(last_x, last_y)
ctx.lineTo(mousex,mousey)
ctx.stroke();

last_x=mousex
last_y=mousey
}
function clear_canvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}










