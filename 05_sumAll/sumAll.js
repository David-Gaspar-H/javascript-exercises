const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number'){
        return "ERROR";
    }
    if (b > a){
        for (let i = a; i < b+1; i++){
            sum += i;
        }
    }
    if (a > b){
        for (let i = b; i < a+1; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
