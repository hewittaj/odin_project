const fibonacci = function(num) {
    let convertedToInt = 0;
    let backOne = 1;
    let backTwo = 0;
    let total = 0;
    // If a negative number
    if(num < 0){
        return "OOPS";
    }

    // if(typeof(num) == "string"){
    //     convertedToInt = parseInt(num);
    // }

    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }

    for(let i = 0; i < num - 1; i++){
        total = backOne + backTwo;
        backTwo = backOne;
        backOne = total;
    }
    return total;
};


// Do not edit below this line
module.exports = fibonacci;
