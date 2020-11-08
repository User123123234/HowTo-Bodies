//needed to define
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine;
var world;
//end

//name the objects
var ground, box, ball, bird;

function setup() {
//needed
engine=Engine.create()
world=engine.world
//end
ground=new Rectangle(200,400,400,10)
ball=new Circle(200,200,20)
bird=new Image(300,300,100)


  createCanvas(400,400);
}

function draw() {
  background(250,250,250); 

//important for matter.js
Engine.update(engine)

ground.display()
ball.display()
bird.display()

}