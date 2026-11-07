function updateClock(){
    const now = new Date();
    document.getElementById('live-clock').textContent = now.toLocaleString();
}
updateClock();
setInterval(updateClock, 1000)

dragElement(document.getElementById("mydiv"));

function dragElement(elemnt){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if(document.getElementById(elemnt.id + "header")){
        document.getElementById(elemnt.id + "header").onmousedown = dragMouseDown;
    }
    else{
        elemnt.onmousedown = dragMouseDown;
    }
function dragMouseDown(e){
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX; 
        pos4 = e.clientY; 
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
function elementDrag(e){
    e = e || window.event;
    e.preventDefault()
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elemnt.style.top  = (elemnt.offsetTop - pos2) + "px";
    elemnt.style.left  = (elemnt.offsetLeft - pos1) + "px";
}
function  closeDragElement(){
    document.onmouseup = null;
    document.onmousemove = null;
}
}