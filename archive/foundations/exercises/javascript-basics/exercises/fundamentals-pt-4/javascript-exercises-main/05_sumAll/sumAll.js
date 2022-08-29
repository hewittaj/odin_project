// Sums all numbers between and including start/stop values
const sumAll = function(start, stop) {
    let sum = 0;
    let counter = start;

    // If a non-number is passed, we will return an error
    if(typeof(start) != "number" || typeof(stop)!= "number"){
        return "ERROR"
    }

    // If a negative number is entered, return an error
    if(start < 0 || stop < 0){
        return "ERROR"
    }

    // If smaller number given first
    if(start < stop){
        // Loop through numbers and add to sum
        while(counter <= stop){
            sum += counter;
            counter ++;
        }
    }

    // If larger number given first
    if (start > stop){
        // Loop through numbers and add to sum
        while(counter >= stop){
            sum += counter;
            counter --;
        }
    }
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
