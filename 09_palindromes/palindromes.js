const palindromes = function (string) {
    string = string.toLowerCase();
    let norm = "";
    let reversed = "";
    for(let i = 0; i < string.length; i ++){
        if(string[i].match(/[a-z]/i)){
            norm += string[i];
        }
    }
    for(let i = string.length - 1; i >= 0; i --){
        if(string[i].match(/[a-z]/i)){
            reversed += string[i];
        }
    }
    return (norm == reversed);
};

// Do not edit below this line
module.exports = palindromes;
