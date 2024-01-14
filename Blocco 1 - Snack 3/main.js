// Blocco 1 - Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numero = 0;
const attivaHtml = document.getElementById( "attiva" )

attivaHtml.addEventListener( 'click', function() {

    // nomi sulla lista
    for(let i = 0; i < 10; i++){

        let input = prompt("Inserisci un numero", "1");
        numero += +input;

    }
    console.log( "Il risultato del tuo calcolo è: " + numero );
    
})
