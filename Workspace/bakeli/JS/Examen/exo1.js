let inputCouleur = document.getElementById('couleur')
let  bouton = document.getElementById('bouton');
let container = document.querySelector('.container')


bouton.addEventListener('click', function() {
    let couleurs = ['black', 'white', 'blue', 'green', 'yellow', 'pink', 'red', 'meuve']
    let couleur = inputCouleur.value
    if (couleurs.indexOf(couleur) === -1) {
        alert('Je doute que ' + couleur + ' soit une couleur entrez une couleur valide\n !Attaion : La couleur doit étre en anglais')
    }else{
        container.style.backgroundColor = couleur
    }
})