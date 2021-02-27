const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container");

container.addEventListener("mousemove", handleDrag);

function handleDrag(e) {
  let xPos = e.layerX;
  let size = container.offsetWidth;

  before.style.width = xPos + "px";
  slider.style.left = xPos + "px";

  if (xPos < 25) {
    before.style.width = 0;
    slider.style.left = 0;
  }

  if (xPos + 25 > size) {
    before.style.width = size + "px";
    slider.style.left = size + "px";
  }
}