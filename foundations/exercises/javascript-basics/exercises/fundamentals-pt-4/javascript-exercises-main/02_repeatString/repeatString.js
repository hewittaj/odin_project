const repeatString = function(string, amount) {
    // Variable to hold the final string
    let finalString = '';
    if(amount < 0){
        return 'ERROR';
    }

    if(amount == 0){
        return ''
    }

    // Loop number of times specified and append the string
    for(let i = 0; i < amount; i++){
        finalString = finalString.concat(string);
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
