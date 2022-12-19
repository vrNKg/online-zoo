// menu-nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-burger');
const navList = document.querySelector('.nav-items-burger');
const burgerBg = document.querySelector('.burger-menu-bg');
const burgerMenu = document.querySelector('.burger-menu');

// бургер меню
function openMenu() {
    nav.classList.toggle('active');
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
    burgerBg.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

hamburger.addEventListener('click', openMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
  nav.classList.remove('active');
  navList.classList.remove('active');
  hamburger.classList.remove('active');
  burgerBg.classList.remove('active');
  burgerMenu.classList.remove('active');
  }
}

hamburger.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
  if(e.target === burgerBg) {
      burgerBg.classList.remove('active');
      burgerMenu.classList.remove('active');
      nav.classList.remove('active');
      navList.classList.remove('active');
      hamburger.classList.remove('active');
  }
});



let circles = Array.from(document.querySelectorAll('.circle'));

circles.forEach(circle => {
  circle.addEventListener("click", ({target}) => {
    circles.forEach(c => target !== c && c.classList.remove("active"));
    target.classList.toggle("active");

  })
});

// Remove class if anything else is clicked
document.body.addEventListener('click', ({target}) =>
  !Array.from(target.classList).includes('circle') 
  && circles.forEach(c => c.classList.remove("active")));