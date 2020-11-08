class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY;
    var option={
      bodyA:bodyA,
      bodyB:bodyB,
      pointB:{x:offsetX,y:offsetY}
    }
    this.Rope= Constraint.create(option);
    World.add(world,this.Rope);
    }
    display(){
      var pointA= this.Rope.bodyA.position;
      var pointB= this.Rope.bodyB.position;
      strokeWeight(5);
      line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }
}