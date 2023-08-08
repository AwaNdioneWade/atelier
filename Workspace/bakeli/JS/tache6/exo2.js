let bonNbr = 8;
let nombre;

let texte = document.getElementById('text');
texte.innerHTML = 'Entrez votre nombre : ';

let nombres = document.querySeclector('choix');

nombres.choix.addEventListener('change', function() {
   validChoix(this);
   if(bonNbr = this.getAttibut('name')){
      texte.innerHTML = 'Entrez votre nombre : vous avez trouver'
   }
});












nombre.choix.addEventListener('change', function() {
   validChoix(this);
});

const validChoix = function(inputChoix) {
   let choixRedExp = new RegExp(
      '^[0-9]$', 'g'
   )
}

let testChoix = choixRedExp.test(inputChoix.value);


if(testChoix){
   texte.innerHTML = 'ffgkk'
}else{
   texte.innerHTML = 'Normalement vous devrez entrer un nombre';
}