const removeFromArray = function(...array) {
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j< array[0].length; j++){
          if(array[0][j] === array[i]){
            let removed = array[0].splice(j,1);
          }
        }
        }
        return array[0]
};
//removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
