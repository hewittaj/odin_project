// Function takes an array with values and a list of values to remove from the array. Returns array without values specified.
const removeFromArray = function(array, ...removed) {
    // Final array declaration
    let finalArray = array;

    let test = removed;
    for(value of removed){
        // Index of the value we want to remove
        let index = array.indexOf(value);
        
        // If undefined index, continue in loop
        if(index === undefined){
            continue;
        }

        // If no match found continue
        if(index < 0){
            continue;
        }

        // Remove value from array
        finalArray.splice(index, 1);
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
