function stars() {
  const count = 500;
  const scene = document.querySelector('.scene');
  let i = 0;

  while (i < count) {
    const star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;

    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = 0.5 + size + 'px';
    star.style.height = 0.5 + size + 'px';
    star.style.animationDuration = 0.5 + duration + 's';

    scene.appendChild(star);
    i++;
  }
}


stars();
