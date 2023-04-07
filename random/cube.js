const cube = document.querySelector('#cube');
let isClicked = false;
let initialX;
let initialY;

cube.addEventListener('mousedown', (e) => {
  isClicked = true;
  initialX = e.clientX;
  initialY = e.clientY;
  cube.style.animationPlayState = 'paused';
});

cube.addEventListener('mouseup', () => {
  isClicked = false;
  cube.style.animationPlayState = 'running';
});

cube.addEventListener('mouseleave', () => {
  isClicked = false;
  cube.style.animationPlayState = 'running';
});

cube.addEventListener('mousemove', (e) => {
  if (isClicked) {
    let xDiff = e.clientX - initialX;
    let yDiff = e.clientY - initialY;
    cube.style.transform = `rotateX(${yDiff * 0.5}deg) rotateY(${xDiff * 0.5}deg)`;
  }
});

