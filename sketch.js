
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	var plane_opitions ={
		restitution: 0.95,
		isStatic: true
	  };


    engine= Engine.create()
    world = engine.world;

	var block_opitions ={
	    restitution: 0.50,
		isStatic: true
		
	  };


	  var rotator_opitions ={
		isStatic: true
	  };

	block1 = Bodies.rectangle(200,390,400,50,block_opitions);
	World.add(world,block1);
    block2 = Bodies.rectangle(600,390,400,10,block_opitions);
	World.add(world,block2);
	plane = Bodies.rectangle(350,695,400,10,plane_opitions);
	World.add(world,plane)

	rotator = Bodies.rectangle(400,300,100,20,rotator_opitions);
	World.add(world,rotator);

	ball1 = Bodies.circle(400,10,20,ball_options);
	World.add(world,ball1);
	ball2 = Bodies.circle(410,40,20,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(390,70,20,ball_options);
	World.add(world,ball3);
	ball4 = Bodies.circle(380,100,20,ball_options);
	World.add(world,ball4);
	ball5 = Bodies.circle(420,130,20,ball_options);
	World.add(world,ball5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  Engine.update(engine);
  
  drawSprites();
 
  Matter.Body.rotate(rotator,angle);
  push();
  translate(rotator.position.x,rotator.position.y);
  rotate(angle);
  rect(0,0,200,20);
  pop();
  angle += 10;


  rect(block1.position.x,block1.position.y,200,10)
  rect(block2.position.x,block2.position.y,200,10)
  rect(plane.position.x,plane.position.y,3000,10)

  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);

}



