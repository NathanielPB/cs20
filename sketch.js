var fixed,moving



function setup() {
  createCanvas(800,400);

  fixed=createSprite(200,200,50,80);
  fixed.shapeColor="green";
  moving =createSprite(400,200,50,80);
  moving.shapeColor="green";

}

function draw() {
  background("black"); 
  
  moving.x = World.mouseX
  moving.y = World.mouseY

  if(fixed.x-moving.x<=fixed.width/2+moving.width/2 &&
    moving.x-fixed.x<=moving.width/2+fixed.width/2 &&
    moving.y-fixed.y<=moving.height/2+fixed.height/2 &&
    fixed.y-moving.y<=moving.height/2+fixed.height/2){
      moving.shapeColor="red"
      fixed.shapeColor="red"
    }
    else{
      moving.shapeColor="green"
      fixed.shapeColor="green"
    }
  drawSprites();
}