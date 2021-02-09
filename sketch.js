var gDebugMode = false;

// Setup code goes here
function setup() {
  createCanvas(1030, 910);
  noStroke(); 
 }


// Draw code goes here
function draw() {
  background(219,145,88,86);

  fill(255,203,164,100); 
  rect(width/2.25, height * (3/4), 125, 125, 20);
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


  if( gDebugMode == true ) {
    drawDebugInfo();
  }

  // two hair strokes 
  fill(241,204,143);
  beginShape();
  vertex(540, 240);
  bezierVertex(800, 150, 800, 900, 550, 900);
  bezierVertex(700, 800, 700, 275, 540, 240);
  endShape();


  fill(217,179,128);    
  beginShape();
  vertex(570, 240);
  bezierVertex(200, 100, 100, 900, 450, 900);
  bezierVertex(275, 800, 300,300, 570, 240);
  endShape();

  // eyebrows 
  // for(let x = 550; x < 640; x+=5){

  //   stroke(101, 67, 33); 
  //   // line(x, 390, x+3, 375); 
  //   curve(x, 360, x-20, 380, x-20, 400, x, 420); 
  //   noStroke(); 
  // }

  // stroke(255, 102, 0);
  // curve(5, 26, 5, 26, 73, 24, 73, 61);

  // fill(101, 67, 33); 
  // line(550, 375, 70, 20);
  // noStroke(); 
  noFill();
  stroke(101, 67, 33);
  strokeWeight(10); 
  curve(640, 500, 540, 400, 640, 400, 640, 400);
  noStroke();

  noFill();
  stroke(101, 67, 33);
  strokeWeight(10); 
  curve(390, 400, 390, 400, 475, 400, 475, 500);
  noStroke();

  noFill();
  stroke(0);
  strokeWeight(2); 
  curve(5, 26, 73, 24, 73, 61, 15, 65);
  curve(490, 500,490, 460, 490,505, 470, 560);
  noStroke();

  noFill();
  stroke(0);
  strokeWeight(2); 
  curve(530, 500,530, 460, 530,505, 550, 560);
  noStroke();


}

// // allows for the page to be made bigger or smaller and let the canvas and drawings move with it
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function drawDebugInfo() {
  fill(255);
    text("X: " + mouseX + "   Y: " + mouseY, 20, height - 20);
}

// keyTyped gets triggered 
function keyTyped() {
  if (key === ' ') {
    gDebugMode = !gDebugMode;
  }
 }
