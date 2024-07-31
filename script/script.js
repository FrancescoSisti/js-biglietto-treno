console.log(`JS OK`);
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

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
    //Calcolo del prezzo base del biglietto per km
    const basePrice = km * 0.21;
    console.log('Prezzo biglietto base', basePrice)

    //Calcolo percentuale di sconto se minorenne oppure over 65
    let finalPrice = basePrice;
    //se minorenne
    if (age < 18) {
        finalPrice = 0.8;
        //se over 65
    } else if (age >= 65) {
        finalPrice = 0.6;
    }
    //aggiungo due decimali al prezzo del biglietto, e il valore euro
    finalPrice = finalPrice.toFixed(2) + '€';
    console.log('Ticket Price', finalPrice)


    //? FASE DI OUTPUT
    //alert con il prezzo del biglietto
    alert(`Grazie per averci scelto! Il prezzo del tuo biglietto è: ${finalPrice}`)
}