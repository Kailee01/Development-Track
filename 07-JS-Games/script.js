let gamebox = document.getElementById('gamebox');
let context = gamebox.getContext('2d');

context.fillStyle = 'brown';

let posX = 0;
let posY = 0;

setInterval(function () {
  posX += 10;
  posY += 10;
  context.clearRect(0, 0, gamebox.width, gamebox.height);
  context.fillRect(posX, posY, 20, 20);
}, 200)