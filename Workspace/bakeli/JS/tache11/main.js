let inputList = document.querySelector('#inputList');
let addTache = document.querySelector('#ajoutList');
let listeTache = document.querySelector('#listeTache');

addTache.addEventListener('click', function(){
    if (inputList.value == ""){
    alert('Veillez d\'abord entrer une tache');
    }

    else{
        
        var taches = document.createElement('div');
        var tache = document.createElement('p');
        let Todo = document.createElement('button');
        let Doing = document.createElement('button');
        let Done = document.createElement('button');

        taches.classList.add('tache');

        Todo.style.background = "red";
        Doing.style.background = "orange";
        Done.style.background = "green";

        
        tache.innerText = inputList.value;
        Todo.innerText = "Todo";
        Doing.innerText = "Doing";
        Done.innerText = "Done";

        listeTache.appendChild(taches);
        taches.appendChild(tache);
        taches.appendChild(Todo);
        taches.appendChild(Doing);
        taches.appendChild(Done);
        
        Todo.addEventListener('click', function(){
            taches.classList.toggle('rouge');
        })
    
        Doing.addEventListener('click', function(){
            taches.classList.toggle('orange');
            
        })
    
        Done.addEventListener('click', function(){
            taches.classList.toggle('vert');
        })
    }
    inputList.value = '';
})