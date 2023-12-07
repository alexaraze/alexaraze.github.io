// Initialize variables
var radius;
var points;
var angle;
var blob = [];
var backgroundColour = [];
var blobColour = [];
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Blob settings
  radius = 100; //Blob size
  points = 10; //Number of coordinates
  angle = 360 / points;
  
  angleMode(DEGREES);
  
  //Randomize background and blob colour
  backgroundColour = [random(255), random(255), random(255)];
  blobColour = [random(255), random(255), random(255)];
  
  //create slider
  slider = select('.slider');
  slider.style('background', color(blobColour[0], blobColour[1], blobColour[2]));
  
document.documentElement.style.setProperty("--slider-colour", color(backgroundColour[0], backgroundColour[1], backgroundColour[2]));

  //set background colour
  setbackground = select('.background');
  setbackground.style('background', color(backgroundColour[0], backgroundColour[1], backgroundColour[2]));
  
  // Set frame rate per second
  frameRate(5);
  // noLoop();
}
  

function draw() {
  
  background(backgroundColour);
  
  //check slider value
  var radiusChange = slider.value();
  
  // Centre on page
  translate(width * 0.5, height * 0.5);
  
  // Draw blob
  push();
  
  noStroke();
  fill(blobColour); //(randomize?)
  
  beginShape();
  for(var i = 0; i < points; i++) {
    var randomRadius = min(radius, radius + random(-radiusChange, radiusChange));
    blob.push({"radius": randomRadius, "x": randomRadius * cos(angle * i), "y": randomRadius * sin(angle * i)})
    circle(blob[i].x, blob[i].y, 1);
    curveVertex(blob[i].x, blob[i].y);
  }
  curveVertex(blob[0].x, blob[0].y);
  curveVertex(blob[1].x, blob[1].y);
  curveVertex(blob[2].x, blob[2].y);
  endShape();
  pop();
  
  // Reset blob array on each frame
  blob = [];
}

function mousePressed() {
  //restart script when user clicks
  setup();
}
