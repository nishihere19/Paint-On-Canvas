
var canvas=document.getElementById("cnvs");
var ctx=canvas.getContext("2d");
var color="black";
var tool="pencil";
//var clicked=false;
var strokeval=1;
ctx.lineWidth=strokeval;
var erase=false;
var defCol="black";
var defStr=1;
//canvas.setAttribute("tabindex",0);
canvas.addEventListener("click", onmousedown, false);
canvas.addEventListener("hover", onmousemove, false);
canvas.addEventListener("hover", onmouseup, false);

var lastX,lastY,isDown=false;
canvas.onmousedown = function(e){
     lastX=e.clientX-383;
     lastY=e.clientY-128;
    isDown=true;
    if(tool!="fill"){
        //ctx.moveTo(lastX,lastY);
        ctx.beginPath();
    }
    
    
    
}
canvas.onmousemove= function(e){
    if(!isDown) return;
    ctx.strokeStyle=color;
    
    if(tool=="pencil"){
        ctx.moveTo(lastX,lastY);
    }
    if(tool=="pencil"){
        
        ctx.lineTo(e.clientX-383,e.clientY-128);
        console.log(lastX,e.clientX);
        console.log(lastY,e.clientY);
        
        ctx.stroke();
        lastX=e.clientX-383;
        lastY=e.clientY-128;
    }
    
    /*else if(tool=="square"){
        ctx.rect(lastX,lastY,e.clientX,e.clientY);
        ctx.stroke();
        ctx.closePath();
    }
    */
   
    
    
}
canvas.onmouseup=function(e){
    console.log(e.clientY);
    console.log(e.clientX);
    if(tool=="square"){
        
        ctx.rect(lastX,lastY,e.clientX-383-lastX,e.clientY-128-lastY);
        ctx.stroke();
       
    }
    if(tool=="circle"){
        var r=(Math.sqrt(((e.clientX-383-lastX)*(e.clientX-383-lastX))+((e.clientY-129-lastY)*(e.clientY-129-lastY))))/2;
        
        ctx.arc(lastX+(e.clientX-383-lastX)/2,lastY+(e.clientY-129-lastY)/2,r,0,2*Math.PI,true);
        //ctx.moveTo(e.clientX-263,e.clientY-129);
        ctx.stroke();
       
    }
    if(tool=="ellipse"){
        var rx=(e.clientX-383-lastX)/2;
        if(rx<0){
            rx=-rx;
        }
        var ry=(e.clientY-129-lastY)/2;
        if(ry<0){
            ry=-ry;
        }
        
        ctx.ellipse(lastX+(e.clientX-383-lastX)/2,lastY+(e.clientY-129-lastY)/2,rx,ry,0,0,2*Math.PI,true);
        //ctx.moveTo(e.clientX-263,e.clientY-129);
        ctx.stroke();
        
    }
    if(tool=="fill"){
        //ctx.moveTo(lastX,lastY);
        ctx.fillStyle=color;
        ctx.fill();
        ctx.closePath();
    }
    lastX=e.clientX;
    lastY=e.clientY;
    isDown=false;
    
}
function animate(){
    requestAnimationFrame(animate);
   
}
animate();
function square(){
    if(erase==true){
        erase=false;
        color=defCol;
        strokeval=defStr;
        ctx.lineWidth=strokeval;
    }
    tool="square";
    
    
    
}
function circle(){
    if(erase==true){
        erase=false;
        color=defCol;
        strokeval=defStr;
        ctx.lineWidth=strokeval;
    }
    tool="circle";
    
    
}
function ellipse(){
    if(erase==true){
        erase=false;
        color=defCol;
        strokeval=defStr;
        ctx.lineWidth=strokeval;
    }
    tool="ellipse";
    
    
}
function pencil(){
    if(erase==true){
        color=defCol;
        strokeval=defStr;
        //strokeval=1;
        ctx.lineWidth=strokeval;
        erase=false;
    }
    tool="pencil";
}
function blue(){
    color="blue";
}
function red(){
    color="red";
}
function green(){
    color="green";
}
function white(){
    color="white";
}
function black(){
    color="black";
}
function yellow(){
    color="yellow";
}
function orange(){
    color="orange";
}
function brown(){
    color="brown";
}
function pink(){
    color="pink";
}
function light_blue(){
    color="lightblue";
}
function lg(){
    color="lightgreen";
}
function fill(){
    
        tool="fill";
    
}
function eraser(){
    //console.log("eraser");
    erase=true;
    defCol=color;
    defStr=strokeval;
    tool="pencil";
    color="white"
}
function add(){
    strokeval+=1;
    ctx.lineWidth=strokeval;
}
function sub(){
    strokeval-=1;
    ctx.lineWidth=strokeval;
}
function bg(){
    canvas.style.backgroundColor=color;
}