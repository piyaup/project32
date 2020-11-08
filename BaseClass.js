class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.008,
            'friction':0.02,
            'density':0.02
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("navy");
        rect(pos.x, pos.y, this.width, this.height);
      }
}
