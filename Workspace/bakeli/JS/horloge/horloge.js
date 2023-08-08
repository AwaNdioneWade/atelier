const horloge = function(){
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    if (minutes < 10){
        minutes = "0" + date.getMinutes();
    }
    if (secondes < 10){
        secondes = "0" + date.getSeconds();
    }
    let affichage = heures + ':' + minutes + ':' + secondes;

    document.querySelector('.Horloge').innerHTML = affichage;
}

window.setInterval (horloge, 1000);