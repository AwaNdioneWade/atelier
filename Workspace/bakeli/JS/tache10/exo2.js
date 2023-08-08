function trie(trieTab) {
    let temp = trieTab;
    let newArr = trieTab;
    for(let i = 0; i < trieTab.length; i++){
        for(let j = 0; j < trieTab.length; j++){
          if (trieTab[i] < newArr[j]){
              temp = trieTab[i]
              trieTab[i] = newArr[j];
              newArr[j] = temp;
        }
        }
    }
    return newArr;
}

tab1 = [5, 3, 87, 1, -4, -99, 0];

console.log(trie(tab1));


function MaxMin(array){
    
    let max = array[1];
    let min = array[1];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > max)
        {
            max = array[i];
        }
        if (array[i] < min)
        {
            min = array[i];
        }
    }
    return{
        max: max,
        min: min,
    } 
}

console.log(MaxMin(tab1));


