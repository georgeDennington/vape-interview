

const navOpen = (e) => {
  const header = document.querySelector('header');
  header.classList.toggle("nav-open");
}

window.addEventListener('load', (event) => {
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', navOpen);
});