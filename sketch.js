var gDebugMode = false;

// Setup code goes here
function setup() {
  createCanvas(1030, 910);
  noStroke(); 
 }


// Draw code goes here
function draw() {

  background(0);

  headAndNeck(); 

  hoodie(); 

  // eyes
  eye(2.4,2.05); 
  eye(1.75,2.05); 

  // drawing face mole
  faceMole(); 

  // mouth
  mouth(); 

  if( gDebugMode == true ) {
    drawDebugInfo();
  }

  //hair
  hair(); 

  // eyebrows 
  eyebrows(); 

// nose
  nose(); 
 // nosering
  noseRing(); 

  // check bone lines
  cheekBoneLine(380, 390, 400, 420); 
  cheekBoneLine(645, 635, 625, 605); 

}

function headAndNeck(){

  // hair behind my neck 
  fill(218,167,104);
  ellipse(width/2.1,height * (3/4),450,470);
  // neck
  fill(247,193,155); 
  rect(width/2.23, 660,100,100, 20);
  // head
  stroke(212,164,136); 
  fill(247,193,155); 
  ellipse(width/2,height/2,325,450);
  noStroke();  

}

function hoodie(){

  fill(68,120,65); 
  beginShape(); 
  vertex(350,726); 
  vertex(465,738); 
  vertex(512,754); 
  vertex(598, 730);
  vertex(748,723);
  vertex(748,910); 
  vertex(240,910); 
  vertex(240,723); 
  endShape();

  // left shoulder 
  ellipse(240, 847, 120, 250); 

  // right shoulder 
  ellipse(750, 847, 120, 250); 

}

function mouth(){
  // lip drawing
  stroke(255,88,105,100); 
  fill(255, 153, 153);    
  beginShape();
  vertex(440,580);
  bezierVertex(440,580,511,650,580,578);
  bezierVertex(590,578,504,548,440,580); 
  endShape();
  // drawing inner lip line
  noFill();
  stroke(255,88,105,100); 
  beginShape();
  strokeWeight(1); 
  curveVertex(440,580);
  curveVertex(440,580);
  curveVertex(460,585);
  curveVertex(508,593);
  curveVertex(550,585);
  curveVertex(580,580);
  curveVertex(580,580);
  endShape();
  noStroke();

}

function eye(eyeWidth, eyeHeight){
  stroke(212,164,136); 
  fill(255); 
  translate(width/eyeWidth,height/eyeHeight);
  beginShape();
  vertex(-45,0);
  bezierVertex(-12,-32,12,-32,45,0);
  bezierVertex(12,32,-12,32,-45,0)
  endShape();

// drawing inner pupil and eye color 
  stroke(0); 
  fill(74,67,0);
  ellipse(0,0,35,35);
  fill(0); 
  ellipse(0,0,15,15);

  translate(-(width/eyeWidth),-(height/eyeHeight));
  noStroke(); 
}

function faceMole(){

  fill(160,82,45); 
  ellipse(width/2.7, height * (4.3/8), 10,15); 

}

function hair(){
  // draws right side curve
  fill(218,167,104);
  beginShape();
  vertex(540, 240);
  bezierVertex(800, 150, 800, 900, 550, 900);
  bezierVertex(700, 800, 700, 275, 540, 240);
  endShape();

  // draws left side curve 
  fill(218,167,104);    
  beginShape();
  vertex(570, 240);
  bezierVertex(200, 100, 100, 900, 450, 900);
  bezierVertex(275, 800, 300,300, 570, 240);
  endShape();

}

function eyebrows(){
  // right eyebrow
  noFill();
  stroke(101, 67, 33);
  strokeWeight(10); 
  curve(640, 500, 540, 400, 640, 400, 640, 400);
  
  // left eyebrow
  noFill();
  stroke(101, 67, 33);
  strokeWeight(10); 
  curve(390, 400, 390, 400, 475, 400, 475, 500);
  noStroke();

}

function nose(){
  // draws left line of nose 
  noFill(); 
  strokeWeight(2); 
  stroke(0); 
  beginShape(); 
  vertex(490,475); 
  bezierVertex(487, 463,494, 502, 472, 515); 
  endShape(); 
  
  // draws left lower curve shape of nose 
  beginShape(); 
  vertex(475,515); 
  bezierVertex(474, 510,455, 523, 482, 526); 
  endShape(); 
 
  // draws center curve of nose
  beginShape();
  curveVertex(530,526);
  curveVertex(530,526);
  curveVertex(517,534);
  curveVertex(500,534);
  curveVertex(483,526);
  curveVertex(483,526);
  endShape();

 // draws right line of nose 
  beginShape(); 
  vertex(525,475); 
  bezierVertex(530, 463,518,496, 540, 515); 
  endShape(); 

  // drwas right lower corner of nose
  beginShape(); 
  vertex(540,515); 
  bezierVertex(540, 510,560, 523, 530, 526); 
  endShape(); 
  noStroke(); 

}

function noseRing(){

  strokeWeight(3);
  noFill();
  stroke(128,128,128); 
  beginShape();
  curveVertex(538, 520);
  curveVertex(538, 520);
  curveVertex(545, 524);
  curveVertex(540, 530);
  curveVertex(532, 528);
  curveVertex(532, 528);
  endShape();
  noStroke();

}

function cheekBoneLine(x1, x2, x3, x4){
  
  noFill();
  stroke(0); 
  beginShape();
  strokeWeight(1); 
  curveVertex(x1,510);
  curveVertex(x1,510);
  curveVertex(x2,517);
  curveVertex(x3,520);
  curveVertex(x4,520);
  curveVertex(x4,520);
  endShape();
  noStroke(); 

}

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
