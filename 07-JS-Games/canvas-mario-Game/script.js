let gamebox = document.getElementById('gamebox');// this is html elment denotes js objects
let context = gamebox.getContext('2d');
// context is a way to paint/write on canvas
context.fillStyle = 'brown';

// context.fillRect(10,10,20,20);  rectangel is created at (10,10) pos from top with size(20*20);       
/*
let posX = 0;
let posY = 0;


setInterval(function () {
  posX += 10;
  posY += 10;
  context.clearRect(0, 0, gamebox.width, gamebox.height);
  context.fillRect(posX, posY, 20, 20);
}, 1000)

*/

// div and all are heavy object while canvas is high performance object inside canvas cant be applied with css




let enemy1 = {
  color: 'red',
  x: 400,
  y: 0,
  h: 30,
  w: 30,
  vx: 0,
  vy: 1.3
}

let enemy2 = {
  color: 'red',
  x: 200,
  y: 0,
  h: 30,
  w: 30,
  vx: 0,
  vy: 2
}

let enemy3 = {
  color: 'red',
  x: 600,
  y: 0,
  h: 30,
  w: 30,
  vx: 0,
  vy: 2.4
}

let player = {
  color: 'blue',
  x: 0,
  y: 175,
  h: 50,
  w: 50,
  vx: 1,
  vy: 0
}


let goal={
color:'black',
x:gamebox.width-100,
y:player.y,
w:40,
h:40,
vx:0,
vy:0
}

function drawBox(box) {
  context.fillStyle = box.color;
  context.fillRect(box.x, box.y, box.w, box.h);
}

function updateGameState(enemy) {
  enemy.y += enemy.vy;
  if (enemy.y + enemy.h > gamebox.height) {
    enemy.vy = -enemy.vy;
  } else if (enemy.y < 0) {
    enemy.vy *=-1;
    // enemy.vy++;
  }

  // if(enemy.y+enemy.w>=goal.y){
  //   alert('Game End');
  // }
  
}

function updateGame() {
  // update game state 
  updateGameState(enemy1);
  updateGameState(enemy2);
  updateGameState(enemy3);

  // clear the canvas
  context.clearRect(0, 0, gamebox.width, gamebox.height);
  // draw the player
  drawBox(player);
  // draw the enemy
  drawBox(enemy1);
  drawBox(enemy2);
  drawBox(enemy3);
  // draw the goal
  drawBox(goal);



  window.requestAnimationFrame(updateGame);
}

updateGame();



function moveDown(box){
  box.y+=box.vy;
}
function moveUP(box){
  box.y-=box.vy;
}
function moveLeft(box){
  box.x+=box.vx;
}
function moveRight(box){
  box.x-=box.vx;
}

gamebox.addEventListener('keydown',moveDown);
gamebox.addEventListener('keydown',moveDown);

let posX=101;
setInterval(() => {
  player.x+=posX;
  posX++;
  if(player.x>=gamebox.width||player.x<=0)posX*=-1;

  context.fillRect(posX,player.y,player.width,player.height);
}, 500);
