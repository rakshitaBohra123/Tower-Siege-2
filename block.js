class Block  {
    constructer(x,y,width,height){
    var options ={
      restitution:0.04,
      friction:0.0,
    } 
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width
    this.height=height;
    this.color(random(0,255))
    World.add(world,this.body);
  }
  
  display(){
    if(this.body.speed<3){
    super.display();
    
    
    
    }
    
    else{
    World.remove(world,this.body)
    push()
    this.Visibility=this.Visibility-5;
    
    tint(255,this.Visibility)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
    var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
fill(this.color);
stroke(255);
rotate(angle);
rectMode(CENTER);
rect(0,0,pos.x,pos.y);
pop();
  }
  };
  