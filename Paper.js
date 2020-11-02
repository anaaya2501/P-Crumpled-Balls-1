class Paper {
  constructor(x,y,diameter){
  var  options = {
 isStatic : false,
 restitution : 0.1,
 friction : 5,
 density : 0.9
  }
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.body = Bodies.circle(this.x,this.y,this.diameter/2,options);
  World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    circle(0,0,this.diameter);
    pop();
  }
}

