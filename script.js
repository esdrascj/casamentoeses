var hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('show-menu');
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  ga('send', 'event', 'galeria', 'next_prev', 'Titulo da página');
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

import Countdown from "..countdown.js"

const tempoParaOWWB = new Countdown("18 December 2021 15:00:00 GMT-0300");
console.log(tempoParaOWWB)