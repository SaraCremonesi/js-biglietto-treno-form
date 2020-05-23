// Declaration form elements
var buttonGenera = document.getElementById('generate');
var buttonAnnulla = document.getElementById('redo');

var formName = document.getElementById('form-name');
var formSurname = document.getElementById('form-surname');
var formKm = document.getElementById('form-chilometers');
var numberKm = parseInt(formKm);
var formAge = document.getElementById('form-age');

// Declaration ticket details
var ticketName = document.getElementById('ticket-name');
var ticketSurname = document.getElementById('ticket-surname');
var ticketPrice = document.getElementById('price');
var ticketOffer = document.getElementById('offer');
var ticketCarriage = document.getElementById('carriage');
var ticketCode = document.getElementById('code');
var ticket = document.getElementById('ticket');

// Error warning
var error = document.getElementById('error');

// Interactions with users (buttons)
buttonGenera.addEventListener('click',
  function () {
    ticketName.innerHTML = formName.value;
    ticketSurname.innerHTML = formSurname.value;
    var ageValue = formAge.value;
    var numberKm = parseInt(formKm.value);

    if (isNaN(numberKm) || (formName.value).length == 0 || (formSurname.value).length == 0 || ageValue == 'empty') {
      error.className = 'visible';
    } else {
      error.className = 'hidden';
      ticket.className = 'visible';

      var priceKm = numberKm * 0.21;
      var offer = 'Prezzo intero';

      if (ageValue == 'minore') {
        priceKm = priceKm - (priceKm * 20 / 100);
        offer = 'Sconto ragazzi';
      } else if (ageValue == 'anziano') {
        priceKm = priceKm - (priceKm * 40 / 100);
        offer = 'Sconto over 65';
      }

      ticketPrice.innerHTML = priceKm.toFixed(2) + '€';
      ticketOffer.innerHTML = offer;
      ticketCarriage.innerHTML = Math.floor(Math.random() * 10 ) + 1;
      ticketCode.innerHTML = Math.floor(Math.random() * 100000) + 1;
    }
  }
);

buttonAnnulla.addEventListener('click',
   function () {
     formName.value = '';
     ticketName.innerHTML = '';
     formSurname.value = '';
     ticketSurname.innerHTML = '';
     formKm.value = '';
     formAge.value = 'empty';

     ticket.className = 'hidden';
     error.className = 'hidden';
     hide.className = 'hidden';
   }
 );
