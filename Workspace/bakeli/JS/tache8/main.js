// question 1
console.log("map() question 1 :");

let tab = [14,19,8,13,17,206,109];
console.log('Premier tableau : ' + tab)

let doubles = tab.map(function(x){

    return  x * 2;

});

console.log('Nouveau tableau avec comme éléments le double des élément du premier tableau : ' + doubles);

// question 2
console.log("filter() question 2 :");

let tabchaine = ['awa', 'Maman', 'Ndiouna', 'Khady', 'Ada'];
console.log('test', tabchaine.length)

let chaine = tabchaine.filter(tabchaine => tabchaine.length > 3);

console.log('Nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3 :' + chaine);

// question 3
console.log("reduce() question 3 :");

let tab1 = [1,2,8,3,10,15,9];

let initial = 0;

let total = tab1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initial
);

console.log(total);

// question 4
console.log("sort() question 4 :");

const nom = ['tom', 'alex', 'bob'];

nom.sort();
console.log(nom);

// question 5
console.log("forEach() question 5 :");

nom.forEach(x => console.log(x));