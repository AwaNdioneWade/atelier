let mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
document.write('mois ori : ', mois + '\n');

delete mois[5];
console.log('delete', mois);
document.write('delete : ', mois + '\n');

let pushMois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
pushMois.push('Aout');
console.log('push', pushMois);
document.write(' push : ', pushMois);

document.write(' mois : ', mois);
mois.splice(1,1, 'FEVRIER');
console.log('splice', mois);
document.write(' splice : ', mois);

document.write(' mois.length : ' + mois.length);
document.write(' l\'émement d\'index 2 de mois' + mois[2]);