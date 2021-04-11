
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var bob
 var Rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1= new Bob(250,520,60);
   bob2= new Bob(309,520,60);
   bob3= new Bob(369,520,60);
   bob4= new Bob(429,520,60);
   bob5= new Bob(489,520,60);
   ground=new Ground(369,320,280,20);
	Engine.run(engine);
	Engine.update(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();

}



