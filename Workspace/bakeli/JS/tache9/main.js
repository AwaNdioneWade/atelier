let nbrelmt1 = prompt('Veillez saisir le nombre d\'élément du premier tableau');

let tab1 = [];
let element1;

for(let i = 0; i < nbrelmt1; i++){
    element1 = prompt("Entrez la valeur pour le premier tableau");
    tab1.push(element1);
}

function positif(element1) {
    return element1 >= 0;
}
let tab3 = tab1.filter(positif);

document.querySelector('.tab1').innerHTML = 'tableau 1 : ' + tab1;
document.querySelector('.tab3').innerHTML = 'tableau 3 : ' + tab3;


// deuxieme tableau
let nbrelmt2 = prompt("Veillez saisir le nombre d\'élément du deuxiéme tableau")
let tab2 =[];
let element2;
for(let i = 0; i < nbrelmt2; i++){
    element2 = prompt("Entrez la valeur pour le deuxiéme tableau");
    tab2.push(element2);
}
document.querySelector('.tab2').innerHTML = 'tableau 2 : ' + tab2;
tab2.fill(0, 0, nbrelmt2);
document.querySelector('.newtab2').innerHTML = 'nouveau tableau 2 :' + tab2;







// let tab2 = [];
// let element2;

// let nbrelmt2 = prompt('Veillez saisir le nombre d\'élément du deuxiéme tableau');

// while(i < nbrelmt2) {
//     element2 = prompt("Entré la valeur le deuxiéme tableau")
//     i++;
//     tab2.push(element2);
// }

// console.log('tableau 2 :' + tab2);


// tab2.splice(0, nbrelmt2, 0);

// console.log('nouveau tableau 2 :' + tab2);





