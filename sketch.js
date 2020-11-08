const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4, pig1;
var backgroundImg,platform;
var score = 0;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    hexagon1 = new Hexagon(200,200,100);
    ground1 = new Ground(600,300,300,20);
    //ground1 levals
    //ground1 leval1
    box12 = new Box(600,225,70,70);
    //ground1 leval2
    box10 = new Box(575,250,70,70);
    box11 = new Box(625,250,70,70);
    //ground1 leval3
    box7 = new Box(600,275,70,70);
    box8 = new Box(650,275,70,70);
    box9 = new Box(550,275,70,70);
    ground2 = new Ground(800,600,300,20);
    //ground2 levals
    //ground2 leval1
    box6 = new Box(795,375,70,70);
    //ground2 leval2
    box4 = new Box(760,450,70,70);
    box5 = new Box(835,450,70,70);
    //ground2 leval3
    box1 = new Box(775,575,70,70);
    box2 = new Box(805,575,70,70);
    box3 = new Box(820,575,70,70);

    sling = new Slingshot(hexagon1.body,{x:150,y:200});

}  

function draw(){
    background(101,133,244);
    Engine.update(engine);

    text("SCORE :"+ score,750,40);

    ground1.display();
    ground2.display();
    hexagon1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();


       sling.display();
}

function mouseDragged() {
    Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32) {
		sling.attach(hexagon1.body);
	}
}

async function getBackground() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    var datetime = responceJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=19) {
        bg = "yellow";
    }
    else{
        bg = "blue";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}












//    //ground1 leval3
//    box7 = new Box(600,275,70,70);
//    box8 = new Box(650,275,70,70);
//    box9 = new Box(550,275,70,70);
//    //ground1 leval2
//    box10 = new Box(575,250,70,70);
//    box11 = new Box(625,250,70,70);
//    //ground1 leval1
//    box12 = new Box(600,225,70,70)



//   //ground2 leval3
//   box1 = new Box(775,575,70,70);
//   box2 = new Box(805,575,70,70);
//   box3 = new Box(820,575,70,70);
//   //ground2 leval2
//   box4 = new Box(760,450,70,70);
//   box5 = new Box(835,450,70,70);
//   //ground2 leval1
//   box6 = new Box(795,375,70,70);