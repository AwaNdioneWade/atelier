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

console.log('//La boucle For/Of :');
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
console.log(`const cars = ["BMW", "Volvo", "Mini"];

let text = "";

for (let x of cars) {
    text += x + " ";
  } => ${text}
  
  `)

let language = "JavaScript";
console.log(language);
let texte = "";

for (let x of language) {
    texte += x + " ";
}
console.log(`
for (let x of language) {
    texte += x + " ";
} => ${texte}`)