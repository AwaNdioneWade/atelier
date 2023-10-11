console.log('//ES6-ES7');

console.log('//FONCTION');
// ES5
var x = function(x, y) {
    return x * y;
 }
// alert('ES5: var x = function(x, y) {\nreturn x * y;\n}\nconsole.log(x(5,2)) => //'+ x(5,2));
 console.log(`ES5: var x = function(x, y){
     return x * y;
     console.log(x(5,2) => //${x(5,2)}
    `)
 
 // ES6
var x = (x, y) => x * y;
// alert('ES6: var x = (x, y) => x * y;\nconsole.log(x(5,5)) => //'+ x(5,5));
console.log(`ES6: var x = (x, y) => x * y;
    console.log(x(5,5) => //${x(5,5)}    
    `)
var x = (x, y) => { return x * y };
// alert('ES6: var x = (x, y) => { return x * y };\nconsole.log(x(2,8)) => //'+ x(2,8));
console.log(`ES6: var x = (x, y) => { return x * y };
console.log(x(2,5) => //${x(2,8)}

`)

console.log("//SPREAD");

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(`Spread mois:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

years = , ${year}

`)


const numbers = [23,55,21,87,56];
console.log('numbers = ', numbers);
let maxValue = Math.max(...numbers);
console.log( `let maxValue = Math.max(...numbers) => ${maxValue}

`);

var string = "geek"
console.log('string = ', string);
var array = [...string]
console.log(`var array = [...string] => ${array}

`)
console.log(array);


//La boucle For/Of

/*
    ! L'instruction JavaScript for/of parcourt les structures de données 
    itérables telles que des tableaux, des chaînes, des cartes, des listes de nœuds, etc.*/

console.log('//La boucle For/Of :');

let language = "JavaScript";
console.log(language);
let texte = "";

for (let x of language) {
    texte += x + " ";
}
console.log(`La boucle For/Of : ${texte}`)

const voitures = ["BMW", "Volvo", "Mini"];
let Text = "";

for (let x of voitures) {
  Text += x + " ";
  console.log(Text);
}

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);
console.log(fruits);


// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);


class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);

const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    // document.getElementById("demo").innerHTML = value;
  });
  console.log(myPromise);

  function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  console.log(myFunction(6, 4));

  // REST

  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let m = sum(4, 9, 16, 25, 29, 100, 66, 77);

  console.log(m);

//String.includes()
/*
       ! La includes()méthode retourne truesi une chaîne contient 
        une valeur spécifiée, sinon false:
*/

let text = "Hello world, welcome to the universe.";
let test = text.includes("world");
console.log(test);

//String.startsWith()
/* 
    La startsWith()méthode retourne true si une chaîne commence 
    par une valeur spécifiée, sinon false:
*/

let phrase = "Hello world, welcome to the universe.";

let dbut = phrase.startsWith("Hello");
let mot = phrase.startsWith("salut");
console.log(dbut);
console.log(mot);

//String.endsWith()
/* 
    La endsWith()méthode retourne true si une chaîne se termine 
    par une valeur spécifiée, sinon false:
*/

let phras = "Hello world, welcome to the universe";

let mots = phras.endsWith("universe");
console.log(mots);

/*
    La Array.from()méthode créez un tableau à partir d'une chaîne 
*/

tab = Array.from("ABCDEFG")
console.log(tab);

/*
    La keys()méthode renvoie un objet Array Iterator avec les clés d'un tableau.
*/  
const tabFruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = tabFruits.keys();
console.log(keys);

let Texte = "";
for (let x of keys) {
  Texte += x + " ";
}
console.log(Texte);


const number = [4, 9, 16, 25, 29];
let first = number.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);