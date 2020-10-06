
// declaring variables 
var car,wall;
var speed, weight; 
var carImage;

function preload(){
  carImage=loadImage("car1.png");
}


function setup() {
  createCanvas(1600, 400);

    // taking random speeds and weights of the car to check deformation
	speed=random(55,90)
	weight=random(400,1500)

	car=createSprite(50, 200, 50,50); 
	car.shapeColor=color(255);
	
	//assigning random speed to the car. 
	car.velocityX = speed;
	
	//creating wall to check the deformation of cars
  	wall=createSprite(1200,200, 60, height/2)
	  wall.shapeColor=color(80,80,80)
	  wall.debug=true;
}


function draw() {
  background(0);
  
  // When call and wall collide, space between them is zero 
  //When the car moves to the right of the wall , distance between their
  //x values is less than the sum of half of their widths
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
	car.velocityX=0;
	//calculating deformation on collision
	var deformation=0.5 * weight * speed* speed/22509;
	
	//Changing the colors of the cars based on the deformation values
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
		textSize(20);
		fill("red");
		strokeWeight(10);
		text("LETHAL, NOT A SAFE CAR",800,100);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
		textSize(20);
		fill(230,230,0);
		strokeWeight(10);
		text("AVERAGE CAR",800,100);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
		textSize(20);
		fill(0,255,0);
		strokeWeight(10);
		text(" A SAFE CAR",800,100);
	}
	console.log(deformation);
  }  
  
  drawSprites();
 
}


