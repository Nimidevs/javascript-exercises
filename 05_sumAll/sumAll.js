const sumAll = function(firstValue, secondValue) {
    if(typeof firstValue === 'string' || typeof secondValue === 'string'){
        return "ERROR"
    }
    if(isNaN(firstValue) || isNaN(secondValue)){
        return "ERROR";
    }
    if(firstValue < 0 || secondValue < 0){
        return "ERROR"
    }
    if(firstValue > secondValue){
        [firstValue, secondValue] = [secondValue, firstValue]
        
    }
    let sum = 0;
    for(let i = firstValue; i <= secondValue; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
