
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var rubber;
var stone;
var hammer;
var iron;
var s1,s2,s3,s4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   plane=new Plane(width/2,height-20,width,40);
   rubber=new Rubber(width/2,200,50,50);
   stone=new Stone(200,100,50,50);
   hammer=new Hammer(500,100,50,50);
   iron= new Iron(100,500,100,50)
   s1= new Sand(500,500,10)
   s2= new Sand(520,500,10)
   s3= new Sand(530,500,10)
   s4= new Sand(540,500,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
  plane.display();
  rubber.display();
  stone.display();
  hammer.display();
  iron.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();

}



