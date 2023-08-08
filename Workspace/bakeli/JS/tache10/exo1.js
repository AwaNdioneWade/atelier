let tab1 = [];
let tab2 = [];
let tab3 = [];
let tab4 = [];
for (let i = 0; i < 5; i++) {
    const element = prompt('renseignez tout les valeurs du premier tableau tableau');
    tab1.push(element);
}

alert("Premier tableau rempli")

for (let i = 0; i < 5; i++) {
    const element = prompt('renseignez tout les valeurs du deuxieme tableau tableau');
    tab2.push(element);
}
console.log('Tab1 = ' + tab1 + '\ntab2 = '+ tab2);


tab3 = tab1.filter(val => !tab2.includes(val))

console.log('Tab3 = ' + tab3);