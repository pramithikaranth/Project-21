var bullet,wall;
var bulletSpeed,bulletWeight;
var bulletWidth = 30;
var wallWidth = 60;
var damage = 0;
var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  

  bulletSpeed = random(223,331);
 
  bulletWeight = random(30,52);

  bullet = createSprite(50,200,bulletWidth,20);
  
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  //bullet.debug = true;
  //wall.debug = true;
  bullet.velocityX = bulletSpeed;
}

function hasCollided(bullet,wall) {
  var bulletRightEdge = bullet.x+bullet.width;
  var wallLeftEdge = wall.x;
  if(bulletRightEdge >=wallLeftEdge){
  return true;
  }
  return  false;
}
function draw() {
  background(0,0,0);  
  text("bulletWeight:"+ bulletWeight,600,60);
  text("bulletSpeed:"+bulletSpeed,600,80);
  text("bulletThickness:"+thickness,600,40);
  if(hasCollided(bullet, wall)){
    damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    bullet.x = wall.x - (bulletWidth/2 + thickness/2);
    text("Damage : "+ damage, 600,100);
    
    if(damage>10){
      wall.shapeColor = color(255,0,0); 
    }
    else {
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}