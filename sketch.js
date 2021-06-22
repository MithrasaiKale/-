var spaceship,spaceshipImg
var bgImg
function preload(){
bgImg=loadImage("spacebg.jpg")
}





function setup() {
  createCanvas(800,400);
  spaceship=createSprite(500,200,30,30)
  }

function draw() {
  background(bgImg);  
  drawSprites();

  
}




if(keyDown(DOWN_ARROW)){
  spaceship.velocityY=3;
}
if(keyDown("left")){
  spaceship.velocityX=-3;
}
if(keyDown("RIGHT_ARROW")){
  spaceship.velocityX=3;
}
if(keyDown("UP_ARROW")){
  spaceship.velocityY=-3;
}