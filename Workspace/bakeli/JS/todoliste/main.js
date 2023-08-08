let addList = document.getElementById('ajoutList');
let inputListe = document.getElementById('inputList');
let listTache = document.getElementById('listeTache');

addList.addEventListener('click', function(){

    if (inputListe.value == ""){
    alert('Veillez d\'abord entrer une tache');
    }

    else{
        var tache = document.createElement('p');
        tache.innerText = inputListe.value;
        listTache.appendChild(tache);
        inputListe.value = '';
        tache.classList.add('tache-style');
    }
    tache.addEventListener('click', function(){
        tache.classList.add('barre-style');
    })
    tache.addEventListener('dblclick', function(){
        listTache.removeChild(tache);
    })
}) 













//  = function (){
//     if (inputListe.value != ""){
//         var eleve = document.createElement('h5');
//     }
//     eleve.innerText = inputListe.value;
//     listEleve.appendChild(eleve);
// }