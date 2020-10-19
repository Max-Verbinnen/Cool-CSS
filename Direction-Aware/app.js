const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    const {x, y} = this.getBoundingClientRect();
    const xPos = e.clientX - x;
    const yPos = e.clientY - y;
    const span = this.querySelector('span');
    span.style.top = yPos + 'px';
    span.style.left = xPos + 'px';
  });

  card.addEventListener('mouseout', function(e) {
    const {x, y} = this.getBoundingClientRect();
    const xPos = e.clientX - x;
    const yPos = e.clientY - y;
    const span = this.querySelector('span');
    span.style.top = yPos + 'px';
    span.style.left = xPos + 'px';
  });
})