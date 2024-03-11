// koden är hjälpt av youtube-video där biosalong byggs upp, däremot är delar bortplockade och modifierade för att passa html och css

const salon = document.querySelector('.salon');
const seats = document.querySelectorAll('.row .seat:not(.upptagen');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.value;

// sparar index och pris för valda platser
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('valdMovieIndex', movieIndex);
    localStorage.setItem('valdMoviePrice', moviePrice);
}

//uppdaterar id total och count - visar antal valda platser och total kostnad i texten under salongen
function updateValdCount() {
    const valdSeats = document.querySelectorAll('.row .seat.vald');

    //Regestrerar i local storage vilka plater som markeras
    const seatsIndex = [...valdSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('valdSeats', JSON.stringify(seatsIndex));

    const valdSeatsCount = valdSeats.length;

    console.log(valdSeatsCount);

    count.innerText = valdSeatsCount;
    total.innerText = valdSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
function populateUI() {
    const valdSeats = JSON.parse(localStorage.getItem('valdSeats'));
    if (valdSeats !== null && valdSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (valdSeats.indexOf(index) > -1) {
          seat.classList.add('vald');
        }
      });
    }

    const valdMovieIndex = localStorage.getItem('valdMovieIndex');

    if (valdMovieIndex !== null) {
        movieSelect.valdIndex = valdMovieIndex;
    }
}

// Klick på platser i salongen markeras som valda och upptagna platser kan ej markeras
salon.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('.upptagen')) {
        e.target.classList.toggle('vald')
    }

    updateValdCount();

});

// intial count and total
updateValdCount();
