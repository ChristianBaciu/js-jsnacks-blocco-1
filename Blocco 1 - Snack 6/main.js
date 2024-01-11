// Blocco 1 - snake 6
// Stampa il cubo dei primi N numeri,

const attivaHtml = document.getElementById( "attiva" )

attivaHtml.addEventListener( 'click', function(){

    const numero = prompt( "Inserisci un numero:" );

    for (let i = 1; i <= numero; i++){
        let cubo = i ** 3; // ** moltiplca due volte lo stessp numero es. 2x2x2
        console.log( "Il cubo di " + numero + " è uguale a: " + cubo);
    }
        
})


