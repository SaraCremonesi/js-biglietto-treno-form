// Form elements
var buttonGenera = document.getElementById('generate');
var buttonAnnulla = document.getElementById('redo');
var formName = document.getElementById('form-name');
var formSurname = document.getElementById('form-surname');

// Ticket details
var ticketName = document.getElementById('ticket-name');
var ticketSurname = document.getElementById('ticket-surname');
var offerta = document.getElementById('offerta');
var carrozza = document.getElementById('carrozza');
var codice = document.getElementById('codice');
var costo = document.getElementById('costo');

buttonGenera.addEventListener('click',
  function () {
    formName = formName.value;
    ticketName.innerHTML = formName;
    formSurname = formSurname.value;
    ticketSurname.innerHTML = formSurname;
  }
);

buttonAnnulla.addEventListener('click',
   function () {
     formName.value = '';
     ticketName.innerHTML = '';
     formSurname.value = '';
     ticketSurname.innerHTML = '';

   }
 )
