
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke(); 
 }


// Draw code goes here
function draw() {
  background(219,145,88,86);

  fill(255,203,164,100); 
  ellipse(width/2,height/2,350,450); 

  // eyes
  fill(255); 
  translate(width/2.4,height/2.1);
  beginShape();
  vertex(-50,0);
  bezierVertex(-15,-35,15,-35,50,0);
  bezierVertex(15,35,-15,35,-50,0)
  endShape();

  fill(74,67,0);
  ellipse(0,0,35,35);
  fill(0); 
  ellipse(0,0,15,15);

  translate(-(width/2.4),-(height/2.1));

  fill(255); 
  translate(width/1.75,height/2.1);
  beginShape();
  vertex(-50,0);
  bezierVertex(-15,-35,15,-35,50,0);
  bezierVertex(15,35,-15,35,-50,0)
  endShape();
  
  fill(74,67,0);
  ellipse(0,0,35,35);
  fill(0); 
  ellipse(0,0,15,15);

  translate(-(width/1.75),-(height/2.1));
}

// allows for the page to be made bigger or smaller and let the canvas and drawings move with it
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
