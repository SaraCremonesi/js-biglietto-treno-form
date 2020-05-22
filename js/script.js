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
var ticketOffer = document.getElementById('offer');
var ticketCarriage = document.getElementById('carriage');
var ticketCode = document.getElementById('code');


// Price per chilometer
var kmPrice = formKm * 0.21;
var offer = ('Prezzo intero');

// Interactions with users (buttons)
buttonGenera.addEventListener('click',
  function () {
    formName = formName.value;
    ticketName.innerHTML = formName;
    formSurname = formSurname.value;
    ticketSurname.innerHTML = formSurname;
    formAge = formAge.value;
  }
);

buttonAnnulla.addEventListener('click',
   function () {
     formName.value = '';
     ticketName.innerHTML = '';
     formSurname.value = '';
     ticketSurname.innerHTML = '';
     formKm.value = '';
   }
 );

 // Discounts
 if (formAge == 'minore') {
   kmPrice = kmPrice - (kmPrice * 20 / 100);
   offer = 'Sconto ragazzi';
 } else if (formAge == 'anziano') {
   kmPrice = kmPrice - (kmPrice * 40 / 100);
   offer = 'Sconto over 65';
};

 ticketOffer.innerHTML = offer;
 ticketPrice.innerHTML = kmPrice + "$";

 
