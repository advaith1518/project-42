var hr, mn, sec;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  Translate(200,200) 
  rotate(-90)
  hr = hour();
  mn = minute();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)
  Push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  Line(0,0,100,0);
  Pop();
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()
  stroke(255,0,255);
  point(0,0)
  strokeWeight(10)
  nofi11();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle)
  stroke(0,255,0)
  arc(0,0,200,200,0,mnAngle)
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle) 
  drawSprites();
}