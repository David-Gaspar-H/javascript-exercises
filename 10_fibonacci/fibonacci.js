const fibonacci = function(position) {
    let sum = 1;
    let arr = [1,1];
    if (position <= 0){
        return "OOPS"
    }
    if (position == 1){
        return arr[0];
    }
    for (let i = 2; i < position; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[position-1];
};

// Do not edit below this line
module.exports = fibonacci;
