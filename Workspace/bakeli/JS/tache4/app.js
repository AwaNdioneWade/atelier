let age = prompt('Quel age avez-vous?')
if (age <= 14){
    alert('t\'es un enfant')
}else if(age >= 15 & age < 25){
    alert('t\'es un adolescent')

}else if(age >= 25 & age <= 64){
    alert('vous etes adulte')

}else if(age > 64){
    alert('vous etes ainé')

}