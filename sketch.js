
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 bob1 = new Bob(520,660,30);
 bob2 = new Bob(460,660,30);
 bob3 = new Bob(400,660,30);
 bob4 = new Bob(340,660,30);
 bob5 = new Bob(280,660,30);

 roof= new Roof(370,300,400,50)

 rope1 = new Rope(bob1.body,roof.body,160,1);
 rope2 = new Rope(bob2.body,roof.body,80,1);
 rope3 = new Rope(bob3.body,roof.body,0,1);
 rope4 = new Rope(bob4.body,roof.body,-80,1);
 rope5 = new Rope(bob5.body,roof.body,-160,1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

 //bobs?
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 //ropes
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 drawSprites();
}



function keyPressed(){
if(keyCode===67){
Matter.Body.applyForce(bob5.body,bob5.position,{x:-50,y:-45})
}

}