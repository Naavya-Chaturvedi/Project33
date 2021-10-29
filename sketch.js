const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bg,engine,world;
var snow = [];

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  
}

function preload(){
  bg = loadImage("snow1.jpg");
}

function draw() {
  background(bg);  
 Engine.update(engine);


 if(frameCount %60 === 0){
  snow.push(new Snow(random(100,700),10,100,100));
 }

 for(var i = 0; i < snow.length; i++){
  snow[i].display();
 }




  drawSprites();
}