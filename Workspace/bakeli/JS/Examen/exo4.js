let inputNbrLigne = document.getElementById('m')
let inputNbrColonne = document.getElementById('n')
let bouton = document.getElementById('bouton')
let tab = document.createElement('table')
let titre = document.createElement('h1')
titre.innerText = 'Mon tableau des tables de mutiplication'
tab.append(titre)

bouton.addEventListener('click', function(){
    let nbrLigne = inputNbrLigne.value
    let nbrColonne = inputNbrColonne.value

    for (let i = 0; i < nbrLigne; i++) {
        let ligne = document.createElement('tr')
        tab.append(ligne)
        for (let y = 0; y < nbrColonne; y++) {
            let colonne = document.createElement('td')
            let valCol = prompt('Renseignez les valeur du tableau')
            if (valCol >= 0 && valCol <= 9){
                colonne.innerText = valCol
                ligne.append(colonne)
            }else{
                alert('Entrez un entier')
                valCol = 0
                colonne.innerText = valCol
                ligne.append(colonne)
            }
        }
        
    }
})
let container = document.querySelector('.container')
container.append(tab)
