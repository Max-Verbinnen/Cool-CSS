const card = document.querySelector('.card');

window.addEventListener('mousemove', e => {
  const {x, y, width, height} = card.getBoundingClientRect();
  const dx = e.clientX - (x + 0.5 * width);
  const dy = e.clientY - (y + 0.5 * height);

  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  card.style.setProperty('--startDeg', `${angle + 90}deg`);
}, false);
