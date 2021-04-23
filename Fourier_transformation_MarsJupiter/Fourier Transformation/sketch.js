//Mars Jupiter Fourier pattern plotting
//6th April 2021
//Not 100% accurate radii

let time = 0;
let wave1 = [];
let wave2 = [];
let path = [];

function setup() {
  createCanvas(1600, 1400);
}

function draw() {
  background(0);
  translate(250, 300);

    let x = 0;
    let y = 0;

    
    x = 30 * cos(2.5* time);
    y = 30 * sin(2.5* time);

    
    
    stroke('red');
    strokeWeight(2);
  
    noFill();
    ellipse(0, 0, 60);

    stroke('red');
    strokeWeight(10);
    point(x, y);

    //ellipse(x, y, 8);
  
  
    let prevx = x;
    let prevy = y;
  
  
    
    let x2 = 30*5 * cos(0.25* time);
    let y2 = 30*5* sin(0.25* time);
  
    stroke('orange');
    strokeWeight(15);
    point(x2,y2);
      
    stroke('orange');
    strokeWeight(2);
  
    noFill();
    ellipse(0, 0, 60*5);
    
    line(x2,y2,x,y)
 

  stroke('grey');
  strokeWeight(2);
  
  wave1.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave1[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave1.length; i++) {
    vertex(i, wave1[i]);
  }
  endShape();
  
  
  stroke('white');
  strokeWeight(2);
  
  
  wave2.unshift(y2);
  translate(0, 0);
  line(x2 - 200 , y2, 0, wave2[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave2.length; i++) {
    vertex(i, wave2[i]);
  }
  endShape();
  
  
  

  time += 0.05;


}