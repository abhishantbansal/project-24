
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pap
var grou

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	grou = new ground(400,450,800,10)
	pap = new paper(100,300,20,20);
	 
  w1 = new ground(500,395,20,80);
	w2 = new ground(625,395,20,80);
	w3 = new ground(562,440,145,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();
  grou.show()
  pap.show()
  w1.show()
  w2.show()
  w3.show()
}
 function keyPressed(){
      if(keyCode===32){
        Matter.Body.applyForce(pap.body,pap.body.position,{x:2,y:0})
      }
      if(keyCode===38){
        Matter.Body.applyForce(pap.body,pap.body.position,{x:0,y:-20})
      }
 }


