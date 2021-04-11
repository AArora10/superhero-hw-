var canvas = new fabric.Canvas ('myCanvas');

block_image_width = 30;
block_image_height = 30;
player_x = 10 ;
player_y = 10;


var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("download.jpeg",function(Img){
        player_object = Img;
        player_object.scaleToHeight(140);
        player_object.scaleToWidth(150);
        player_object.set({
            top:player_y, left:player_x
        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top:player_y, left:player_x
        });

        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_pressed = e.keyCode;
console.log (key_pressed);


if (e.shiftKey ==true && key_pressed == '80'){
  console.log ("shift and p are pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10 ; 
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if (e.shiftKey ==true && key_pressed == '77'){
  console.log ("shift and M are pressed together");
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10 ; 
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}
if (key_pressed =='38'){

    up();
    console.log ("up is pressed");
}
if (key_pressed =='40'){
down();
    console.log ("down is pressed");
  
}
if (key_pressed =='37'){
    left();
    console.log ("left is pressed");
}
if (key_pressed =='39'){
    right();
    console.log ("right is pressed");
}

if (key_pressed == '87'){
  new_image('iron_man.png')  ;
  console.log ("w is pressed");
}
if (key_pressed == '71'){
    new_image('spider_man.png')  ;
    console.log ("g is pressed");
  }
  if (key_pressed == '76'){
    new_image('arm.png')  ;
    console.log ("l is pressed");
  }
  if (key_pressed == '84'){
    new_image('oarm.jpg')  ;
    console.log ("t is pressed");
  }
  if (key_pressed == '82'){
    new_image('hulk.png')  ;
    console.log ("r is pressed");
  }
  
  function up(){
    if (player_y >= 0){
    player_y = player_y - block_image_height;
    console.log ("block_image_height =" +  block_image_height);
    console.log ("when up arrow is pressed , x = " + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();}
  }
  function down(){
    if (player_y <= 500){
    player_y = player_y + block_image_height;
    console.log ("block_image_height =" +  block_image_height);
    console.log ("when up down is pressed , x = " + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();}
  }
  function left(){
    if (player_x >= 0){
    player_x = player_x - block_image_width;
    console.log ("block_image_height =" +  block_image_width);
    console.log ("when up left is pressed , x = " + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();}
  }
  function right(){
    if (player_x <= 850){
    player_x = player_x + block_image_width;
    console.log ("block_image_height =" +  block_image_width);
    console.log ("when up right is pressed , x = " + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();}
  }
}