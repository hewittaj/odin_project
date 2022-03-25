const palindromes = function (word) {
    let stripped = word.replace(/[^A-z]/gi, '');
    let split = stripped.split("");
    let reversed = split.reverse();
    let rejoined = reversed.join("");


    if(stripped.toLowerCase() == rejoined.toLowerCase()){
        return true
    }

    return false;
};


// Do not edit below this line
module.exports = palindromes;
