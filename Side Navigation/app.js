const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
  
  if (toggle.classList.contains("active")) {
    toggle.childNodes[0].classList.remove("fa-chevron-right");
    toggle.childNodes[0].classList.add("fa-chevron-left");
  } else {
    toggle.childNodes[0].classList.add("fa-chevron-right");
    toggle.childNodes[0].classList.remove("fa-chevron-left");
  }
});