
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

  // drawing face mole
  fill(160,82,45); 
  ellipse(width/2.7, height * (4.3/8), 10,15); 

  // mouth
  // arc(width/2, height * (5/8), 30, 30, 0, radians(180), PIE);

  fill(255, 153, 153); 
  translate(width/2,height * (5/8));
  beginShape();
  vertex(-70,0);
  bezierVertex(-20,-20,20,-20,70,0);
  bezierVertex(10,40,-10,40,-70,0)
  endShape();
  translate(-(width/2),-(height * (5/8)));


}

// allows for the page to be made bigger or smaller and let the canvas and drawings move with it
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
