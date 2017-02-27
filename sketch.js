/*
*Shiraz Fazli
*idea 135
*sketch 8: p5 pong
*2/27/17
*I worked with Suki and we both got help from Jacob via text message.
*I wanted to make the game more difficult while still being playable by making the paddle faster, the ball smaller, the ball color lighter, and adding frame counts all over the screen as a distraction. I also wanted it to play differently from any pong game that I've played by making the game go on forever once level 2 is unlocked. 
 */

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var score;
var life;
var level;


function setup() {
    createCanvas(600, 300);
    paddle_h = 12;
    paddle_w = 3 * paddle_h;
    paddle_x = width / 2;
    paddle_y = height - paddle_h;
    paddle_step = 0;
    ball_r = 5;
    score = 0;
    life = 1
    level = 1
    reset();
}


function draw() {
    background (223, 153, 240);
    
    //fakescore
    textSize (32);
    fill (214, 100, 190);
    text (frameCount * 2, 30, 30);
    
    textSize (40);
    fill (214, 100, 190);
    text (frameCount * 3, 40, 30);
    
    textSize (60);
    fill (214, 100, 190);
    text (frameCount * 3, 104, 292);
    
    textSize (170);
    fill (214, 100, 190);
    text (frameCount * 9, 434, 183);
    
    
    // move paddle
    //paddle_x += (mouseX - paddle_x) * .1;
    paddle_x = paddle_x + paddle_step * 10;

    // is the ball hitting the right or left wall?
    if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
	ball_x_step = -ball_x_step;
    }

    // hitting the top?
    if (ball_y - ball_r < 0) {
	ball_y_step = -ball_y_step;
    }

    // draw paddle
    noStroke;
    fill(189, 45, 135);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);
    
    // hitting the paddle?
    if (ball_y + ball_r > paddle_y) {
	if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
	    ball_y_step = -ball_y_step;
	    ball_y = paddle_y - ball_r;
        score = score + 1;
	}
	else if (ball_y + ball_r > paddle_y && level == 1) {
        background (223, 153, 240);
        textSize (120);
        text("no", 100, 100);
        	noLoop();}
    }
    
    
    // move ball by ball_x_step and ball_y_step
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;

    //draw ball
    noStroke();
    fill(177, 145, 255);
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);
    
    textSize (12);
    fill (214, 100, 190);
    text (score, 150, height/2);
    text ("score:", 100, height/2);
    
    text ("life left: 0", 100, (height/2) +30);
    
    if (score == 3){
        level = 2}
    
    textSize (70);
    text (level, 160, (height/2) +40);

}
function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-5, 5);
    ball_y_step = random(1, 3);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
	paddle_step = -3;
    } else if (keyCode == RIGHT_ARROW) {
	paddle_step = 3;
    } else if (key == ' ') {
	reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}
function mouseClicked() {
  if (level == 1){
    level = 2;
  } 
    }
