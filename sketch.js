var thickness,wall;

var bulletspeed,bulletweight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);

  bullet.velocityX=speed;

  bullet.shapeColor=color(255);

  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor=color(230,230,230);
}

function draw() {
  background(255,255,255);  
  if (hascollided(bullet,wall)) 
     {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if   (deformation>10)  
    {
    world.shapeColor=color(255,0,0);
   }
     if    (deformation<10)    
     {
       world.shapeColor=color(0,255,0);
     }
  }
  drawSprites();
}
   function hascollided (lbullet,lwall)   {
   bulletrightedge=lbullet.x+lbullet.width
   wallleftedge=lwall.x
   if   (bulletrightedge>=wallleftedge)   
   {
     return true 
   } 
   return false
   }
