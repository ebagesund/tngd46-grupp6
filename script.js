// NEDRÄKNING

const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const realeaseDate = new Date("june 21 2024 21:00:00")

//uppdate Countdowntime
function updateCountdowntime() {
    const currentTime = new Date ();
    let diff = realeaseDate - currentTime;
    
    
    const d = Math.floor(diff/1000/60/60/24)
    diff = diff-(d*1000*60*60*24)
    const h = Math.floor(diff/1000/60/60)
    diff = diff-(h*1000*60*60)
    const m = Math.floor(diff/1000/60)
    diff = diff-(m*1000*60)
    const s = Math.floor(diff/1000)
    
    if (days != null && hours != null && minutes != null && seconds != null) {
        days.innerHTML = d < 10 ? '0' + d : d;
        hours.innerHTML = h < 10 ? '0' + h : h;
        minutes.innerHTML = m < 10 ? '0' + m : m;
        seconds.innerHTML = s < 10 ? '0' + s : s;    
    }

}

updateCountdowntime()
setInterval(updateCountdowntime, 1000);


    
// BILDGALLERI

let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Biljettbokning