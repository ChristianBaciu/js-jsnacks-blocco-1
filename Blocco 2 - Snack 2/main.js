// Blocco 2 - snack 2
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi
// e una lista di cognomi, e da queste vuole generare una falsa lista di invitati
// con nome e cognome.

const nome = [ "Dominic", "Brian", "Roman", "Sean", "Han", "Tej", "Luke", "Bow" ]
const cognome = [ "Toretto", "O'Conner", "Boswell", "Hobbs", "Lue", "Parker", "Hobbs", "Wow" ]

const attivaHtml = document.getElementById( "attiva" )

const nomiSullaLista = 16;

// prende nomi e cognomi casuali
function generaNomeCasuale() {
    let nomeCasuale = nome[Math.floor( Math.random() * nome.length)];
    let cognomeCasuale = cognome[Math.floor( Math.random() * cognome.length)];
    return nomeCasuale + " " + cognomeCasuale;
}

attivaHtml.addEventListener( 'click', function() {

    // nomi sulla lista
    for (let i = 8; i < nomiSullaLista; i++) {
        let invitato = generaNomeCasuale();
        console.log(invitato);
    }

})

