// Blocoo 2 - snack 3
// Crea un array di numeri interi e fai la somma di tutti gli elementi
// che sono in posizione dispari

const attivaHtml = document.getElementById( "attiva" )
attivaHtml.addEventListener( 'click', function() {

    let sum = 0;

    let arrayNInteri = [1, 2, 3, 4, 5];

    for(let i = 0; i < arrayNInteri.length; i++){
        if(i % 5 !== 0){
            console.log(sum += arrayNInteri[i]);
        }
    }

    console.log(`La somma dei numeri in posizione dispari è: ${sum}`);

})
