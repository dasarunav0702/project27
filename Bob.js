class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          'friction':5,
          'density':1.0,
          'restitution':1

      }
      this.body = Bodies.circle(x, y, r, options);
      this.r=r;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill ("red");
      
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  