// menu-nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-burger');
const navList = document.querySelector('.nav-items-burger');
const burgerBg = document.querySelector('.burger-menu-bg');
const burgerMenu = document.querySelector('.burger-menu');



// попап
const testiCard = document.querySelector('.testi-card');
const testiX = document.querySelector('.testi-x');
const testiMainCard = document.querySelectorAll('.testimonial-card');
const testiBg = document.querySelector('.testi-card-bg');

// testi slidershow
const testiSlider = document.querySelector('input[type="range"]');
const testiCards = document.querySelectorAll('.testimonial-card');
const testiContent = document.querySelector('.testimonial-wrapper');
const testiCarousel = document.querySelector('.testimonial-content');


// pets slideshow
const prevBtn = document.querySelector(".arrow_left");
const NextBtn = document.querySelector(".arrow_right");
const cards = document.querySelectorAll(".card");
const cardImages = document.querySelectorAll(".card-image");
const cardTitles = document.querySelectorAll(".card-title");
const cardSubtitles = document.querySelectorAll(".card-subtitle");

const sliderWrapper  = document.querySelectorAll(".slider-wrapper");
let card = {
  imageSrc:"./assets/images/two-pandas.png",
  imageAlt:"Pandas",
  textSpan:"Giant pandas",
  textP:"Native to Southwest China",
}

let card1 = {
  imageSrc:"./assets/images/eagle.png",
  imageAlt:"Eagle",
  textSpan:"Eagles",
  textP:"Native to South America",
}
let card2 = {
  imageSrc:"./assets/images/gorilla.png",
  imageAlt:"Gorilla",
  textSpan:"Gorillas",
  textP:"Native to Congo",
}
let card3 = {
  imageSrc:"./assets/images/alligator.png",
  imageAlt:"Alligator",
  textSpan:"Alligator",
  textP:"Native to Southeastern U. S.",
}
let card4 = {
  imageSrc:"./assets/images/cheetahs.png",
  imageAlt:"Cheetahs",
  textSpan:"Cheetahs",
  textP:"Native to Africa",
}
let card5 = {
  imageSrc:"./assets/images/penguin.png",
  imageAlt:"Penguin",
  textSpan:"Penguins",
  textP:"Native to Antarctica",
}

let sliders = [card, card1, card2, card3, card4, card5];

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

// попап
function openCard() {
  testiCard.classList.toggle('active');
  testiBg.classList.toggle('active');
}

testiMainCard.forEach((div) => {
  div.addEventListener('click', () => {
    testiCard.classList.toggle('active');
    testiBg.classList.toggle('active');
  })
})

function closeCard(event) {
  if (event.target.classList.contains('testi-x')) {
    testiBg.classList.remove('active');
    testiCard.classList.remove('active');
  }
}

testiX.addEventListener('click', closeCard);

document.addEventListener('click', (e) => {
  if(e.target === testiBg) {
    testiBg.classList.remove('active');
    testiCard.classList.remove('active');
  }
});


// pets slideshow

function plusSlides() {
  showSlides(shuffle(sliders))
}

function showSlides(arr) {
  for (let i = 0; i < arr.length; i++) {
      cards[i].classList.toggle('fade');
      cardImages[i].src = arr[i].imageSrc;
      cardImages[i].alt = arr[i].imageAlt;
      cardTitles[i].textContent = arr[i].textSpan;
      cardSubtitles[i].textContent = arr[i].textP;

    }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// testi slidershow
const gap = 30;
let elementWidth = function(){ return window.innerWidth > 1000 ? 268 : 293 };

let rangeValue = function(){
  let newValue = testiSlider.value;
  console.log(elementWidth) 

  testiContent.scrollTo((elementWidth() + gap)*newValue, 0);
}

testiSlider.addEventListener("input", rangeValue);
window.addEventListener("resize", e => rangeValue);