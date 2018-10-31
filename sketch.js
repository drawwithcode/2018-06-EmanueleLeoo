var myData;
var myImage;
var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;
var myImage7;
var myImage8;
var myImage9;
var myImage10;
var myImage11;
var myImage12;

function preload() {
	// put preload code here
  myData = loadJSON('./assets/stadiums.json');
  myImage = loadImage('./assets/sfondo.jpg');
  myImage1 = loadImage('./assets/stadio1.jpg');
  myImage2 = loadImage('./assets/stadio2.jpg');
  myImage3 = loadImage('./assets/stadio3.jpg');
  myImage4 = loadImage('./assets/stadio4.jpg');
  myImage5 = loadImage('./assets/stadio5.jpg');
  myImage6 = loadImage('./assets/stadio6.jpg');
  myImage7 = loadImage('./assets/stadio7.jpg');
  myImage8 = loadImage('./assets/stadio8.jpg');
  myImage9 = loadImage('./assets/stadio9.jpg');
  myImage10 = loadImage('./assets/stadio10.jpg');
  myImage11 = loadImage('./assets/stadio11.jpg');
  myImage12 = loadImage('./assets/stadio12.jpg');
}
//empty arrey of balls
var balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

//make a loop over my people arrey
  for(var i = 0; i < myData.stadiums.length; i++){
    //new variable astro is the one that allow to acces to people in my data
    var astro = myData.stadiums[i];
    //three variable for the function ball = x, y and the diameter
    var x = random(width);
    var y = random(height);
    //the diameter is equale to the carrerdays data in the data sheet
    var d = 180;
    var l = astro.name;
    var s = astro.city;
    //we create a new function as we have done in the old exercise
    var newBall = new Ball(x,y,d,l,s);

    balls.push(newBall);

    console.log(astro)
  }
}

function draw() {

  image(myImage, 0, 0, width, height);
  image(myImage1, random(1, width), random(1, height), width/4, height/4);
  image(myImage2, random(1, width), random(1, height), width/4, height/4);
  image(myImage3, random(1, width), random(1, height), width/4, height/4);
  image(myImage4, random(1, width), random(1, height), width/4, height/4);
  image(myImage5, random(1, width), random(1, height), width/4, height/4);
  image(myImage6, random(1, width), random(1, height), width/4, height/4);
  image(myImage7, random(1, width), random(1, height), width/4, height/4);
  image(myImage8, random(1, width), random(1, height), width/4, height/4);
  image(myImage9, random(1, width), random(1, height), width/4, height/4);
  image(myImage10, random(1, width), random(1, height), width/4, height/4);
  image(myImage11, random(1, width), random(1, height), width/4, height/4);
  image(myImage12, random(1, width), random(1, height), width/4, height/4);

  fill(random(0, 300), random(0,300), random(0,100));
  // Set a size
  textSize(24);
  // text(string, x, y)
  text('Click the mouse to see the stadiums names', 283.5, height/2);

	for(var j = 0; j < balls.length; j++) {
		balls[j].move();
		balls[j].display();
	}
}

function Ball(_x, _y, _diameter, _label, _secSc) {
	// Properties defined by constructor
	this.size = _diameter;
	this.x = _x;
	this.y = _y;
  this.label = _label;
  this.secSc = _secSc
	// Hardcoded properties
	this.color = '#ff7f77';
	this.speed = 6;

	this.yDir = 1;
	this.xDir = 1;
	// Methods
	this.move = function() {
		this.x += this.speed * this.xDir * random(1,3);
		this.y += this.speed * this.yDir * random(1,3);

		if (this.y >= height || this.y <= 0) {
			// if 1, set to -1, if -1, set to 1
			this.yDir *= -1;
		}

		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
	}

	this.display = function() {
		fill(this.color);
    strokeWeight(1);
		ellipse(this.x, this.y, this.size);
    fill('black');
    textAlign(CENTER);
    textSize(15);
    text(this.secSc, this.x, this.y-10);
    textFont('Helvetica');
    textStyle(BOLD);
    if (mouseIsPressed) {
      textSize(20);
      text(this.label, this.x, this.y+10);
      this.color = '#ff443a';
} else {this.color = '#ff7f77';}
	}
}
