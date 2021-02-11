/*************************************************************************
    (*)Code Self Portrait
          (*)by Sophia Ladwiniec 

    (*)Overview - This is my self portrait drawing in p5.js. You will see a photo of me in code form! 
 
    ---------------------------------------------------------------------
    (*)Notes:
     (1) I tried to make my drawing extremely precise!
     which is why there are a lot of hard coded numbers that were pretty difficult 
     to narrow down and turn into functions but this was super fun to make 
     (2) I also used the debug mode Scott showed on his video which saved me a ton of time. 
**************************************************************************/
function setup() {
  createCanvas(1030, 910);
  noStroke(); 
}

//draws everything on my face, my background, my hoodie, mouth, etc. 
function draw() {
  //draws background 
  drawBackground(); 

  //draws head and neck 
  headAndNeck(); 

  //draws hoodie
  hoodie(); 

  //draws eyes
  eye(2.4, 2.05); 
  eye(1.75, 2.05); 

  //draws face mole
  faceMole(); 

  //draws mouth
  mouth(); 

  //draws hair
  hair(); 

  //draws eyebrows 
  eyebrows(); 

  //draws nose
  nose(); 
  //draws nose ring
  noseRing(); 

  //draws check bone lines
  cheekBoneLine(380, 390, 400, 420); 
  cheekBoneLine(645, 635, 625, 605); 
}

//draws a rectangle background with a black background behind it
//creates circular rectangles 
function drawBackground(){
  background(0);

  //variable that allows the color to switch between greens 
  let switchColor = true; 
  //i in this case is y and j is x 
  for(let i = 0; i < 1000; i+=100) {
    for(let j = 0; j < 1200; j+=100) {
      if(switchColor) {
         fill(170, 184, 187);
      }
      else {
        fill(192, 209, 205); 
      }
      //changes from true to false and false to true 
      switchColor = !switchColor; 
      //draws a rectangle based off the coordinates from j and i 
      rect(j,i, 100, 100,30);
    }
    switchColor = !switchColor; 
  }
}

//draws my head and neck 
function headAndNeck(){
  //hair behind my neck 
  fill(218,167,104);
  ellipse(width/2.1, height * (3/4), 450, 470);

  //neck
  fill(247, 193, 155); 
  rect(width/2.23, 660, 100, 100, 20);
  
  //head
  stroke(212,164,136); 
  fill(247, 193, 155); 
  ellipse(width/2, height/2, 325, 450);
  noStroke();  
}

// draws the green hoodie I was wearing in my sketch
function hoodie() {
  fill(68, 120, 65); 
  beginShape(); 
  vertex(350, 726); 
  vertex(465, 738); 
  vertex(512, 754); 
  vertex(598, 730);
  vertex(748, 723);
  vertex(748, 910); 
  vertex(240, 910); 
  vertex(240, 723); 
  endShape();

  //left shoulder 
  ellipse(240, 847, 120, 250); 

  //right shoulder 
  ellipse(750, 847, 120, 250); 
}

//draws my lips and lip line 
function mouth() {
  //lip drawing
  stroke(255, 88, 105, 100); 
  fill(255, 153, 153);    
  beginShape();
  vertex(440, 580);
  bezierVertex(440, 580, 511, 650, 580, 578);
  bezierVertex(590, 578, 504, 548, 440, 580); 
  endShape();

  //drawing inner lip line
  noFill();
  stroke(255, 88, 105, 100); 
  beginShape();
  strokeWeight(1); 
  curveVertex(440, 580);
  curveVertex(440, 580);
  curveVertex(460, 585);
  curveVertex(508, 593);
  curveVertex(550, 585);
  curveVertex(580, 580);
  curveVertex(580, 580);
  endShape();
  noStroke();
}

//draws my eyes, inner pupil as well at the perspective eyeWidth and eyeHeight provided
function eye(eyeWidth, eyeHeight) {
  stroke(212, 164, 136); 
  fill(255); 
  translate(width/eyeWidth, height/eyeHeight);
  beginShape();
  vertex(-45, 0);
  bezierVertex(-12, -32, 12, -32, 45, 0);
  bezierVertex(12, 32, -12, 32, -45, 0)
  endShape();

  //drawing inner pupil and eye color 
  stroke(0); 
  fill(74, 67, 0);
  ellipse(0, 0, 35, 35);
  fill(0); 
  ellipse(0, 0, 15, 15);

  //putting original x and y back 
  translate(-(width/eyeWidth), -(height/eyeHeight));
  noStroke(); 
}

//draws the mole I have on my face 
function faceMole() {
  fill(160, 82, 45); 
  ellipse(width/2.7, height * (4.3/8), 10,15); 
}

//draws the two curves of hair that you see on the screen that shape my face 
function hair() {
  //draws right side curve
  fill(218, 167, 104);
  beginShape();
  vertex(540, 240);
  bezierVertex(800, 150, 800, 900, 550, 900);
  bezierVertex(700, 800, 700, 275, 540, 240);
  endShape();

  //draws left side curve 
  fill(218, 167, 104);    
  beginShape();
  vertex(570, 240);
  bezierVertex(200, 100, 100, 900, 450, 900);
  bezierVertex(275, 800, 300, 300, 570, 240);
  endShape();
}

//draws the eyebrows on my face 
function eyebrows() {
  //right eyebrow
  noFill();
  stroke(101, 67, 33);
  strokeWeight(10); 
  curve(640, 500, 540, 400, 640, 400, 640, 400);
  
  //left eyebrow
  noFill();
  stroke(101, 67, 33);
  strokeWeight(10); 
  curve(390, 400, 390, 400, 475, 400, 475, 500);
  noStroke();
}

// draws my nose outline 
function nose(){
  //draws left line of nose 
  noFill(); 
  strokeWeight(2); 
  stroke(0); 
  beginShape(); 
  vertex(490, 475); 
  bezierVertex(487, 463, 494, 502, 472, 515); 
  endShape(); 
  
  //draws left lower curve shape of nose 
  beginShape(); 
  vertex(475,515); 
  bezierVertex(474, 510, 455, 523, 482, 526); 
  endShape(); 
 
  //draws center curve of nose
  beginShape();
  curveVertex(530, 526);
  curveVertex(530, 526);
  curveVertex(517, 534);
  curveVertex(500, 534);
  curveVertex(483, 526);
  curveVertex(483, 526);
  endShape();

  //draws right line of nose 
  beginShape(); 
  vertex(525, 475); 
  bezierVertex(530, 463, 518, 496, 540, 515); 
  endShape(); 

  //draws right lower corner of nose
  beginShape(); 
  vertex(540, 515); 
  bezierVertex(540, 510, 560, 523, 530, 526); 
  endShape(); 
  noStroke(); 
}

//draws my nose ring 
function noseRing() {
  strokeWeight(3);
  noFill();
  stroke(128, 128, 128); 
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

//draws my cheekbone lines at the respective x coordinates provided 
function cheekBoneLine(x1, x2, x3, x4) { 
  noFill();
  stroke(0); 
  beginShape();
  strokeWeight(1); 
  curveVertex(x1, 510);
  curveVertex(x1, 510);
  curveVertex(x2, 517);
  curveVertex(x3, 520);
  curveVertex(x4, 520);
  curveVertex(x4, 520);
  endShape();
  noStroke(); 
}