const repeatString = function(text, amount) {
    let string = "";
    if (amount < 0){
        string = "ERROR";
        return string;
    }
    for (let i = 0; i < amount; i++){
        string = string + text;
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
