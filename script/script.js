console.log(`JS OK`);
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//Fase di preparazione
const priceElement = document.getElementById('price');

//Fase di raccolta dati
//Chiedere i chilometri all'utente
const km = parseInt(prompt("Inserisci il numero di chilometri che devi percorrere"));
console.log(`Chilometri richiesti`, km);

//Chiedere l'età
const age = parseInt(prompt("Inserisci la tua età"));
console.log(`Età richiesta`, age);

//Fase di elaborazione
if (isNaN(km) || isNaN(age)) {
    alert('Non hai inserito valori accettabili')
} else {
    const basePrice = km * 0.21;
    console.log('Prezzo biglietto base', basePrice)

    let finalPrice = basePrice;
    let message = 'Hai ricevuto uno sconto del ';

    if (age < 18) {
        finalPrice *= 0.8;
        message += '20%'
    } else if (age >= 65) {
        finalPrice *= 0.6;
        message += '40%'
    }

    finalPrice = finalPrice.toFixed(2) + '€';
    console.log('Ticket Price', finalPrice)

    //Fase di output
    priceElement.innerHTML = `Il prezzo finale del tuo biglietto è: ${finalPrice} <br> ${message}`
}