let inputAgeActu = document.getElementById('ageActu')
let inputAgeVise = document.getElementById('ageVise')
let bouton = document.getElementById('bouton')
let jourVecuDom = document.getElementById('jourVecu')
let ecartJourDom = document.getElementById('ecartJour')

function age() {
    let ageActu = inputAgeActu.value
    let ageVise = inputAgeVise.value
    if (ageActu == "" || ageVise == "") {
        alert('Entrez d\'abord l\'age')        
    }else{
        if (ageActu > 0 && ageVise > 0) {
            if(ageActu < ageVise){
                let jourVecu = ageActu * 360
                let ecart = ageVise - ageActu
                let ecartJour = ecart * 360    
                jourVecuDom.innerHTML = 'Vous avez vécu ' + jourVecu + ' jours sur terre'
                ecartJourDom.innerHTML = 'Si vous souhaitez vivre ' + ageVise + 'ans, il vous reste ' + ecartJour + ' jours à vivre'
            }
            if (ageActu > ageVise){
                alert('Vous avez déja plus de ' + ageVise + 'ans')
            }      
        }else{
            alert('L\'age ne peut pas étre négatif')        
        }
        ageActu == ""
        ageVise == ""
    }
}

bouton.addEventListener('click', function(){
    age();
})