Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown"
}
Canvas.addEventListener("mouseleave", my_mouseleave);
function my_mousedown(e){
    mouseEvent="mouseleave"
}
Canvas.addEventListener("mouseup", my_mouseup);
function my_mousedown(e){
    mouseEvent="mouseUP"
}
Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x = e.clientX - canvas.offseteLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
 if (mouseEvent == "mouseDown")
 ctx.beginPath();
 ctx.strokeStyle= color;
 ctx.lineWidth= width_of_line;

 console.log("Last position of x and y coordinates =");
 console.log("x="+ last_position_of_x +"y="+ last_position_of_y);
 ctx.moveTo( last_position_of_x , last_position_of_y);

 console.log("Current position of x and y coordinates =");
 console.log("x="+ current_position_of_x +"y="+ current_position_of_y);
 ctx.moveTo( current_position_of_x , current_position_of_y);

 last_position_of_x = current_position_of_mouse_x;
 last_position_of_y = current_position_of_mouse_y;
}
function my_touchstart(e){
    console.log(my_touchstart)
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop;

function my_touchmove(e)[
    console.log("my_touchmove");
    current_position_of_mouse_x = e.clientX - canvas.offseteLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
     ctx.beginPath();
     ctx.strokeStyle= color;
     ctx.lineWidth= width_of_line;
    
     console.log("Last position of x and y coordinates =");
     console.log("x="+ last_position_of_x +"y="+ last_position_of_y);
     ctx.moveTo( last_position_of_x , last_position_of_y);
    
     console.log("Current position of x and y coordinates =");
     console.log("x="+ current_position_of_x +"y="+ current_position_of_y);
     ctx.moveTo( current_position_of_x , current_position_of_y);
    
     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;
}