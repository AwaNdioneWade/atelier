let inputTexte = document.getElementById('texte')
let bouton = document.getElementById('bouton')

bouton.addEventListener('click', function(){
    function palindrome(texte) {

        const taille = texte.length;
        
        let soumet = ''

        for (let i = 0; i < taille / 2; i++) {
            if (texte[i] !== texte[taille - 1 - i]) {
                soumet = 'c\'est pas un palindrome'
            }else{
                soumet = 'c\'est un palindrome'
            }
        }
        return soumet;
    }


    const texte = inputTexte.value;


    alert(palindrome(texte));
})




