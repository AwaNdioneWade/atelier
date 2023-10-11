const espaceAffiche = document.getElementById('espaceAffiche')
const espaceAffiche2 = document.getElementById('espaceAffiche2')
const un = document.getElementById('un')
const deux = document.getElementById('deux')
const trois = document.getElementById('trois')
const quatre = document.getElementById('quatre')
const cinq = document.getElementById('cinq')
const six = document.getElementById('six')
const sept = document.getElementById('sept')
const huit = document.getElementById('huit')
const neuf = document.getElementById('neuf')
const zero = document.getElementById('zero')
const multi = document.getElementById('multi')
const division = document.getElementById('division')
const plus = document.getElementById('plus')
const sous = document.getElementById('sous')
const egale = document.getElementById('egal')
const suppTout = document.getElementById('cc')
const suppUn = document.getElementById('ce')
const point = document.getElementById('point')

// création balise h1 qui va contenir la valeur du touche clicque
let variableTemp = document.createElement('h1')
let secondVariableTemp = document.createElement('h1')

let stockVariableTemp 
let secondStockVariableTemp
let resultat

    secondVariableTemp.innerText = ""
    variableTemp.innerText = ""
    un.addEventListener('click', function(){
        // insertion valeur touche à son balise h1        
        variableTemp.innerText += "1"
        // ajout variableTemp comme enfant de espace espaceAffiche
        espaceAffiche.append(variableTemp)
    })
    
    deux.addEventListener('click', function(){
        variableTemp.innerText += "2"
        espaceAffiche.append(variableTemp)
    })
    trois.addEventListener('click', function(){
        variableTemp.innerText += "3"
        espaceAffiche.append(variableTemp)
    })
    quatre.addEventListener('click', function(){
        variableTemp.innerText += "4"
        espaceAffiche.append(variableTemp)
    })
    cinq.addEventListener('click', function(){
        variableTemp.innerText += "5"
        espaceAffiche.append(variableTemp)
    })
    six.addEventListener('click', function(){
        variableTemp.innerText += "6"
        espaceAffiche.append(variableTemp)
    })
    sept.addEventListener('click', function(){
        variableTemp.innerText += "7"
        espaceAffiche.append(variableTemp)
    })
    huit.addEventListener('click', function(){
        variableTemp.innerText += "8"
        espaceAffiche.append(variableTemp)
    })
    neuf.addEventListener('click', function(){
        variableTemp.innerText += "9"
        espaceAffiche.append(variableTemp)
    })
    zero.addEventListener('click', function(){
        variableTemp.innerText += "0"
        espaceAffiche.append(variableTemp)
    })
    point.addEventListener('click', function(){
        variableTemp.innerText += "."
        espaceAffiche.append(variableTemp)
    })
    division.addEventListener('click', function(){
        stockVariableTemp = document.createElement('h3')
        // conversion de variableTemp string en int dans la variable stockVariableTemp
        stockVariableTemp.innerText = parseInt(variableTemp.innerText)
        variableTemp.innerText = "/"

        // ajout stockVariableTemp comme enfant de espace espaceAffiche2        
        espaceAffiche2.append(stockVariableTemp)

        un.addEventListener('click', function(){
            secondVariableTemp.innerText += "1"
        })
        deux.addEventListener('click', function(){
            secondVariableTemp.innerText += "2"
        })
        trois.addEventListener('click', function(){
            secondVariableTemp.innerText += "3"
        })
        quatre.addEventListener('click', function(){
            secondVariableTemp.innerText += "4"
        })
        cinq.addEventListener('click', function(){
            secondVariableTemp.innerText += "5"
        })
        six.addEventListener('click', function(){
            secondVariableTemp.innerText += "6"
        })
        sept.addEventListener('click', function(){
            secondVariableTemp.innerText += "7"
        })
        huit.addEventListener('click', function(){
            secondVariableTemp.innerText += "8"
        })
        neuf.addEventListener('click', function(){
            secondVariableTemp.innerText += "9"
        })
        zero.addEventListener('click', function(){
            secondVariableTemp.innerText += "0"
        })

        egale.addEventListener('click', function(){     
            secondStockVariableTemp = parseInt(secondVariableTemp.innerText)
            resultat = stockVariableTemp.innerText / secondStockVariableTemp      
            variableTemp.innerText = resultat     
            espaceAffiche.append(variableTemp)
        })

    })
    multi.addEventListener('click', function(){
        stockVariableTemp = document.createElement('h3')
        // conversion de variableTemp string en int dans la variable stockVariableTemp
        stockVariableTemp.innerText = parseInt(variableTemp.innerText)
        variableTemp.innerText = "*"

        // ajout stockVariableTemp comme enfant de espace espaceAffiche2        
        espaceAffiche2.append(stockVariableTemp)

        un.addEventListener('click', function(){
            secondVariableTemp.innerText += "1"
        })
        deux.addEventListener('click', function(){
            secondVariableTemp.innerText += "2"
        })
        trois.addEventListener('click', function(){
            secondVariableTemp.innerText += "3"
        })
        quatre.addEventListener('click', function(){
            secondVariableTemp.innerText += "4"
        })
        cinq.addEventListener('click', function(){
            secondVariableTemp.innerText += "5"
        })
        six.addEventListener('click', function(){
            secondVariableTemp.innerText += "6"
        })
        sept.addEventListener('click', function(){
            secondVariableTemp.innerText += "7"
        })
        huit.addEventListener('click', function(){
            secondVariableTemp.innerText += "8"
        })
        neuf.addEventListener('click', function(){
            secondVariableTemp.innerText += "9"
        })
        zero.addEventListener('click', function(){
            secondVariableTemp.innerText += "0"
        })
        
        egale.addEventListener('click', function(){     
            secondStockVariableTemp = parseInt(secondVariableTemp.innerText)
            resultat = stockVariableTemp.innerText / secondStockVariableTemp      
            variableTemp.innerText = resultat     
            espaceAffiche.append(variableTemp)
        })
    })
    sous.addEventListener('click', function(){
        stockVariableTemp = document.createElement('h3')
        // conversion de variableTemp string en int dans la variable stockVariableTemp
        stockVariableTemp.innerText = parseInt(variableTemp.innerText)
        variableTemp.innerText = "-"
        
        // ajout stockVariableTemp comme enfant de espace espaceAffiche2        
        espaceAffiche2.append(stockVariableTemp)
        un.addEventListener('click', function(){
            secondVariableTemp.innerText += "1"
        })
        deux.addEventListener('click', function(){
            secondVariableTemp.innerText += "2"
        })
        trois.addEventListener('click', function(){
            secondVariableTemp.innerText += "3"
        })
        quatre.addEventListener('click', function(){
            secondVariableTemp.innerText += "4"
        })
        cinq.addEventListener('click', function(){
            secondVariableTemp.innerText += "5"
        })
        six.addEventListener('click', function(){
            secondVariableTemp.innerText += "6"
        })
        sept.addEventListener('click', function(){
            secondVariableTemp.innerText += "7"
        })
        huit.addEventListener('click', function(){
            secondVariableTemp.innerText += "8"
        })
        neuf.addEventListener('click', function(){
            secondVariableTemp.innerText += "9"
        })
        zero.addEventListener('click', function(){
            secondVariableTemp.innerText += "0"
        })
        
        egale.addEventListener('click', function(){     
            secondStockVariableTemp = parseInt(secondVariableTemp.innerText)
            resultat = stockVariableTemp.innerText - secondStockVariableTemp      
            variableTemp.innerText = resultat     
            espaceAffiche.append(variableTemp)
        })
    })
    plus.addEventListener('click', function(){
        stockVariableTemp = document.createElement('h3')
        // conversion de variableTemp string en int dans la variable stockVariableTemp
        stockVariableTemp.innerText = variableTemp.innerText
        variableTemp.innerText = "+"
                
        // ajout stockVariableTemp comme enfant de espace espaceAffiche2        
        espaceAffiche2.append(stockVariableTemp)

        un.addEventListener('click', function(){
            secondVariableTemp.innerText += "1"
        })
        deux.addEventListener('click', function(){
            secondVariableTemp.innerText += "2"
        })
        trois.addEventListener('click', function(){
            secondVariableTemp.innerText += "3"
        })
        quatre.addEventListener('click', function(){
            secondVariableTemp.innerText += "4"
        })
        cinq.addEventListener('click', function(){
            secondVariableTemp.innerText += "5"
        })
        six.addEventListener('click', function(){
            secondVariableTemp.innerText += "6"
        })
        sept.addEventListener('click', function(){
            secondVariableTemp.innerText += "7"
        })
        huit.addEventListener('click', function(){
            secondVariableTemp.innerText += "8"
        })
        neuf.addEventListener('click', function(){
            secondVariableTemp.innerText += "9"
        })
        zero.addEventListener('click', function(){
            secondVariableTemp.innerText += "0"
        })
        
        egale.addEventListener('click', function(){     
            secondStockVariableTemp = secondVariableTemp.innerText
            console.log(stockVariableTemp.innerText);
            console.log(secondStockVariableTemp);
            resultat = eval(stockVariableTemp.innerText)
            // resultat = stockVariableTemp.innerText + secondStockVariableTemp     
            console.log(resultat);
            variableTemp.innerText = resultat     
            espaceAffiche.append(variableTemp)
        })
    })

    suppUn.addEventListener('click', function(){       
        variableTemp.innerText = ""
    })

    suppTout.addEventListener('click', function(){       
        variableTemp.innerText = ""
        stockVariableTemp.innerText = ""
    })