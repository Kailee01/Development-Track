let gamebox = document.getElementById('gamebox');// this is html elment denotes js objects
let context = gamebox.getContext('2d');
let score=0;
let score_id=document.getElementById('score_id');
// let enemy=document.getElementById('enemy');
// let princess=document.getElementById('goal');
// let mario=document.getElementById('player');
// context is a way to paint/write on canvas
context.fillStyle = 'brown';

// context.fillRect(10,10,20,20);  rectangel is created at (10,10) pos from top with size(20*20);       

// div and all are heavy object while canvas is high performance object inside canvas cant be applied with css

let enemy1 = {
  color: 'red',
  name:'enemy',
  x: 400,
  y: 0,
  h: 40,
  w: 40,
  vx: 0,
  vy: 3
}

let enemy2 = {
  color: 'red',
  name:'enemy',
  x: 200,
  y: 0,
  h: 40,
  w: 40,
  vx: 0,
  vy: 2
}

let enemy3 = {
  color: 'red',
  name:'enemy',
  x: 600,
  y: 0,
  h: 40,
  w: 40,
  vx: 0,
  vy: 2.4
}

let player = {
  color: 'blue',
  name:'player',
  x: 0,
  y: 175,
  h: 50,
  w: 50,
  vx: 10,
  vy: 10
}


let goal={
color:'black',
name:'goal',
x:gamebox.width-40,
y:player.y,
w:40,
h:40,
vx:0,
vy:0
}




function drawBox(box) {
  let imgId=document.getElementById(box.name);
  context.drawImage(imgId,box.x, box.y, box.w, box.h);
}
function setAllToIntialState() {
  enemy1.x=400;
  enemy1.y=0;
  enemy2.x=200;
  enemy2.y=0;
  enemy3.x=600;
  enemy3.y=0;
  player.x=0;
  player.y=175;

  enemy1.vy=Math.abs(enemy1.vy);
  enemy2.vy=Math.abs(enemy2.vy);
  enemy3.vy=Math.abs(enemy3.vy);
}


function playWon() {
  let audioIdW=document.getElementById('WonGame');
  audioIdW.play();

}
function playLost() {
  let audioIdL=document.getElementById('lostGame');
  audioIdL.play();
}




  







function updateGameState(enemy) {
  enemy.y += enemy.vy;
  if (enemy.y + enemy.h > gamebox.height) {
    enemy.vy = -enemy.vy;
  } else if (enemy.y < 0) {
    enemy.vy *=-1;
    // enemy.vy++;
  }



  // if(enemy.x==player.x&&player.y>=enemy.y&&player.y<=enemy.y+enemy.width){
    if(enemy.x==player.x&&player.y<=enemy.y+30&&player.y>=enemy.y-30){
    alert('Game Over Try Again !!');
    playLost();
    score=0;
    let currentScore=score.toString();
    score_id.innerText="Score = "+currentScore;
    parseInt(score);
    setAllToIntialState();
    enemy1.vy=3;
    enemy2.vy=2.4;
    enemy3.vy=1;
  }
  


  if(player.x+player.w==goal.x){
    playWon();
    alert('Congratulation!!! Increase Level');
    score++;
    let currentScore=score.toString();
    score_id.innerText="Score = "+currentScore;
    parseInt(score);
    setAllToIntialState();
    increaseLeve();
  }
}



function increaseLeve() {
  enemy1.vy=Math.abs(enemy1.vy);
  enemy1.vy++;
  enemy2.vy=Math.abs(enemy2.vy);
  enemy2.vy++;
  enemy3.vy=Math.abs(enemy3.vy);
  enemy3.vy++;
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

function moveUp(box){
  box.y-=box.vy;
}
function moveLeft(box){
  box.x-=box.vx;
}
function moveRight(box){
  box.x+=box.vx;
}

gamebox.addEventListener('keydown',moveDown);
gamebox.addEventListener('keydown',moveDown);

document.addEventListener('keydown',keyPress); // listen the event

function keyPress(event){
  var keyName=event.key;
  if(keyName=='ArrowRight'){
    if(player.x+player.w<=gamebox.width){
      moveRight(player);
    }
  }
  if(keyName=='ArrowLeft'){
    if(player.x+player.w>50){
      moveLeft(player);
    }
}

  if(event.keyCode=='38'){
  // if(keyName=='ArrowUp'){
    moveUp(player);
  }
  if(keyName=='ArrowDown'){
    moveDown(player);
    }
}