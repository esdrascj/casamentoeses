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


//function startTimer(duration, display) {

   // var timer = duration, minutes, seconds;
    //setInterval(function() {
        //minutes = parseInt(timer / 60, 10);
        //seconds = parseInt(timer % 60, 10);

        //minutes = minutes <10 ? "0" + minutes : minutes;
        //seconds = seconds <10 ? "0" + seconds : seconds;

        //display.textContent = minutes + ":" + seconds;

        //if(--timer < 0) {
            //timer = duration;
       // }
   // }, 1000);
//}

//window.onload = function() {
   // var duration = 60 * 4; //conversão para segundos
   // var display = document.querySelector("#timer");// elemento para exibir o startTimer

    //startTimer(duration, display);
//}