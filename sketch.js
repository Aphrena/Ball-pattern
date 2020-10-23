var line1;
var box1, box2, stopper1, stopper2;

function setup() {
  createCanvas(1280,400);
 line1 = createSprite(100, 200, 3000, 10);
 line1.shapeColor = "purple";

 box1 = createSprite(100, 100, 10, 10);
 box1.shapeColor = "red";
 box1.velocityX  = 15;
 box1.velocityY  = -10;

 box2 = createSprite(100, 300, 10, 10);
 box2.shapeColor = "green";
 box2.velocityX  = 15;
 box2.velocityY  = -10;

 stopper1 = createSprite(0, 400, 50, 1280);
 stopper1.shapeColor = "purple";

 stopper2 = createSprite(1280, 400, 50, 1280);
 stopper2.shapeColor = "purple";
}

function draw() {
  background(0);

  edges = createEdgeSprites();
  box1.bounceOff(edges);
  box2.bounceOff(edges);
  box1.bounceOff(line1);
  box2.bounceOff(line1);
 

if (box1.isTouching(stopper2)){
  box1.shapeColor = "blue";
}

if (box2.isTouching(stopper2)){
  box2.shapeColor = "yellow";
}

if (box1.isTouching(stopper1)){
  box1.shapeColor = "red";
}

if (box2.isTouching(stopper1)){
  box2.shapeColor = "green";
}

  drawSprites();
}
