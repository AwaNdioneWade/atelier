alert('voici les différents boucle\n1. switch case\n2. for\n3. do while\n4 . while');
let boucle = prompt('Quels boucles voulez vous voir : switch case, for, do while, ou while?').toLowerCase();
if (boucle == 'switch case'){
    alert('Syntaxe:\nswitch Nomvariable{\ncase`valeur`: {\ncondition;\nbreak;\n}\ncase `valeur2`{\ncondition;\nbreak;\n}\ndefault{\ncondition;}\n}');
}else if(boucle == 'for'){
    alert('syntaxe:\nfor (let NomVariable = valeur; NomVariable <, =, >, <=, ou <=  valeur; NomVariable += ou -= valeur){\ncondition;\n}');
}else if(boucle == 'do while'){
    alert('let NomVariable = valeur\ndo {\ncondition;\n Nomvariable +=;\}while(Nomvariable condition)');
}else if(boucle == 'while'){
    alert('while(Nomvariable condition) {\ncondition;\n Nomvariable +=;\}');
}else{
    alert('Choisissez un boucle qui existe');
}
