// class Hexagon{
//     constructor(x, y, width, height, angle) {
//         var options = {
//             isStatic: true,
//             restitution:0.8,
//             friction:1.0
//         }
//         this.body = Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height;
//         World.add(world, this.body);
//       }
//       display(){
//         var angle = this.body.angle;
//         push();
//         translate(this.body.position.x, this.body.position.y);
//         rotate(angle);
//         rectMode(CENTER);
//         rect(this.image, 0, 0, this.width, this.height);
//         pop();
//       }
// }
class Hexagon {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r,options);
      this.x = x;
      this.y = y;
      this.r = r;
    //   this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y,50,50,50);
    }
  };
