class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 100;
  }
  score() {
   console.log("visibility : "+this.visibility)
    if(this.visibility < 0 && this.visibility >- 50){
      score++;
    }
  
  }
  display() {
    // console.log(this.body.speed);
    if(this.body.speed<10){
      super.display()
    }
    else{
    World.remove(world,this.body)
    push ();
   this.visibility = this.visibility-1;
  // console.log(this.visibility)
    tint (255,this.visibility);
  //  image (this.image,this.body.position.x,this.body.position.y,50,50);
    pop ();
  }

}
}