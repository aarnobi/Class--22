const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ball;
var rect1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  var ball_options = {
    restitution : 1.0
  }
  
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  rect1 = Bodies.rectangle(250,230,20,20,ball_options);
  World.add(world,rect1);
  console.log(ground);

  

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(rect1.position.x,rect1.position.y,20,20);
}