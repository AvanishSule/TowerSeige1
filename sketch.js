const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;  

var engine,world;
//var a;
//var circles=[];
var ground;
var stand1,stand2;
var box;
var polygon,polygon1;
var slingShot;

function preload(){
  polygon = loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  stroke(255)


 ground = new Ground(400,385,800,20);

 stand1 = new Stand(320,250,180,20);
 stand2 = new Stand(530,150,180,20);

 box1 = new Box(260,235,30,40);
 box2 = new Box(290,235,30,40);
 box3 = new Box(320,235,30,40);
 box4 = new Box(350,235,30,40);
 box5 = new Box(380,235,30,40);

 box6 = new Box(290,195,30,40);
 box7 = new Box(320,195,30,40);
 box8 = new Box(350,195,30,40);

 box9 = new Box(320,155,30,40);

 box10 = new Box(470,135,30,40);
 box11 = new Box(500,135,30,40);
 box12 = new Box(530,135,30,40);
 box13 = new Box(560,135,30,40);
 box14 = new Box(590,135,30,40);

 box15 = new Box(500,95,30,40);
 box16 = new Box(530,95,30,40);
 box17 = new Box(560,95,30,40);

 box18 = new Box(530,55,30,40);

 polygon1 = Bodies.circle(50,200,20);
 World.add(world,polygon1);

 slingShot = new Slingshot(polygon1,{x:100,y:200});
 
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)

  Engine.run(engine);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}

 ground.display();

 stand1.display();
 stand2.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

 box6.display();
 box7.display();
 box8.display();

 box9.display();

 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();

 box15.display();
 box16.display();
 box17.display();

 box18.display();

 imageMode(CENTER)
 image(polygon,polygon1.position.x,polygon1.position.y,40,40);

 slingShot.display();
  
  /*for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}*/
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} */