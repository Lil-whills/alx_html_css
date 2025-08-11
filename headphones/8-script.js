const Hamburger = document.querySelector('.hamburger');
const phoneNav = document.querySelector('.phoneNav');

Hamburger.addEventListener('click', () => {
  phoneNav.classList.toggle('active');
});
