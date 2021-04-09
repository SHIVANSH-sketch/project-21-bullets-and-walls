var wall,thickness;
var bullet,speed,weight;

function setup() {
createCanvas(1600,400);

speed=random(223,321)
weight=random(32,52)
thickness=random(22,83)

bullet = createSprite(200, 200, 50, 50);
bullet.velocityX = speed;
bullet.shapeColor=color(255);

wall = createSprite(1200,200,thickness, 100);
wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
    {
      wall.shapeColor=color("red");

    }
    if(damage<10)
    {
      wall.shapeColor=color("green");
    }

  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge= lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
  return false;
}


