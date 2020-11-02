const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sizeBtns = sizes.querySelectorAll('button');


container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  title.style.transform = 'translateZ(100px)';
  sneaker.style.transform = 'translateZ(125px) rotateZ(-45deg)';
  description.style.transform = 'translateZ(75px)';
  sizes.style.transform = 'translateZ(50px)';
  purchase.style.transform = 'translateZ(25px)';
});

container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(-0deg)';
  description.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});

sizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sizeBtns.forEach(btn => {
      btn.classList.remove('active')
    })
    btn.classList.toggle('active');
  });
});