// Declaration form elements
var buttonGenera = document.getElementById('generate');
var buttonAnnulla = document.getElementById('redo');

var formName = document.getElementById('form-name');
var formSurname = document.getElementById('form-surname');
var formKm = document.getElementById('form-chilometers');
var formAge = document.getElementById('form-age');

// Declaration ticket details
var ticketName = document.getElementById('ticket-name');
var ticketSurname = document.getElementById('ticket-surname');
var ticketPrice = document.getElementById('price');
var ticketOfferType = document.getElementById('offer');
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
    var numberKm = parseInt(formKm.value);

    if ((isNaN(numberKm) || numberKm < 1) || (formName.value).length == 0 || (formSurname.value).length == 0 || formAge.value == 'empty') {
      error.className = 'show';
    } else {
      error.className = 'hidden';
      ticket.className = 'show';

      var priceKm = numberKm * 0.21;
      ticketOfferType.innerHTML = 'Prezzo intero';

      if (formAge.value == 'minore') {
        priceKm = priceKm - (priceKm * 20 / 100);
        ticketOfferType.innerHTML = 'Sconto ragazzi';
      } else if (formAge.value == 'anziano') {
        priceKm = priceKm - (priceKm * 40 / 100);
        ticketOfferType.innerHTML = 'Sconto over 65';
      }

      ticketPrice.innerHTML = priceKm.toFixed(2) + '€';
      ticketCarriage.innerHTML = Math.ceil(Math.random() * 10 ) + 1;
      ticketCode.innerHTML = Math.ceil(Math.random() * 100000) + 1;
    }
  }
);

buttonAnnulla.addEventListener('click',
   function () {
     formName.value = '';
     ticketName.innerHTML = '';
     formSurname.value = '';
     ticketSurname.innerHTML = '';
     numberKm = '';
     formAge.value = 'empty';

     ticket.className = 'hidden';
     error.className = 'hidden';
   }
 );
