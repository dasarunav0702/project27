
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1= new Box(260,200,200,30);
	bob1= new Bob(200,400,20);
	bob2= new Bob(240,400,20);
	bob3= new Bob(280,400,20);
	bob4= new Bob(320,400,20);
	rope1= new Rope(bob1.body,box1.body,-60,0);
	rope2= new Rope(bob2.body,box1.body,-20,0);
	rope3= new Rope(bob3.body,box1.body,+20,0);
    rope4= new Rope(bob4.body,box1.body,+60,0);
	Engine.run(engine);
  
}


function draw() {
   background("white");
   box1.display();
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45,y:-45})
	}
}

