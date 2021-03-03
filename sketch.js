var engine,world,bodies,paperball,ground,dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperball = new Paperball(150,570)
	
	dustbin1  = new Dustbin(620,525,20,120);
	dustbin2  = new Dustbin(880,545,20,120);
	dustbin3  = new Dustbin(750,570,250,20);
	ground    = new Ground(500,593);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();



  drawSprites();
 
}
 
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-50})
	}
	
}


