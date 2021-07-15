
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var rectangle;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	


	bob1 = new Bob(500,500,30);
	bob2 = new Bob(530,500,30);
	bob3 = new Bob(560,500,30);
	bob4 = new Bob(590,500,30);
	bob5 = new Bob(620,500,30);


	rope1 = new Rope(bob1.body , {x:500,y:200})
	rope2 = new Rope(bob2.body , {x:530,y:200})
	rope3 = new Rope(bob3.body , {x:560,y:200})
	rope4 = new Rope(bob4.body , {x:590,y:200})
	rope5 = new Rope(bob5.body , {x:620,y:200})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  rect(560,200,150,10)

  fill('pink')
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  drawSprites();
 
}



function keyPressed(){



if(keyCode == 37){
	console.log("tamasha")
	applyForce(bob1,{x: 0, y: -0.05})
}


}