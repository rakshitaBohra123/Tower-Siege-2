const Engine= Matter.Engine;
const Bodies= Matter.Body;
const World=  Matter.World;
const Constraint= Matter.Constraint;


var engine,world



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  polygon1 = new Block(330,235,30,40);
  polygon2 = new Block(360,235,30,40);
  polygon3 = new Block(390,235,30,40);
  polygon4 = new Block(420,235,30,40);
  polygon5 = new Block(450,235,30,40);
  polygon6 = new Block(360,195,30,40);
  polygon7 = new Block(390,195,30,40);
  polygon8 = new Block(490,195,30,40);
  polygon9 = new Block(390,155,30,40);
 
  ground = new Ground(400,390,800,10);
  stand = new Stand(330,240,60,10);
  
hexagon = new Hexagon(10,10,5,5)

 slingshot= new Slingshot(this.hexagon,{x:100,y:200});

 Engine.run(engine);

}

function draw() {
 background(0)
  Engine.update(engine);
  background(255,255,255);  
  
  polygon1.display();
  polygon2.display();
  polygon3.display();
  polygon4.display();
  polygon5.display();
  polygon6.display();
  polygon7.display();
  polygon8.display();
  polygon9.display();
  
  ground.display();
  stand.display();
  slingshot.display();
  hexagon.display();
  
  
  
  
  drawSprites();
}

function mouseDragged(){
  
  
      Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});
  
  }
  
  
  function mouseReleased(){
      slingshot.fly();
      
  }
  function keyPressed(){
  if(keyCode===32){
      slingshot.attach(hexagon.body)
      }
  }