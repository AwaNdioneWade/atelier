function Moyenne (){
    let nbrNote = prompt('Veillez saisir le nombre de notes que vous avez ?');
    let notes = 0;
    let M;
    for(let i = 0; i < nbrNote ; i += 1) {
        let note = prompt('Veillez saisir la note');
        notes = notes + + note;
        M = notes / 2;
    }
    return M; 
}
alert( "Vous avez une moyenne de : " + Moyenne ());  