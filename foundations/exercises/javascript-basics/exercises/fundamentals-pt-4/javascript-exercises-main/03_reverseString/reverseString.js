// Function takes a string and reverses it.
const reverseString = function(str) {
    // Split the string into an array of separate words
    let arr = str.split();
    let final = "";

    // Loop through the strings and then split, reverse, and rejoin them into a final string
    for(string of arr){
        let splitArray = string.split('');
        let reversedString = splitArray.reverse();
        let joinedString = reversedString.join("");
        final = final.concat(joinedString);
        
    }

    return final;
};

// Do not edit below this line
module.exports = reverseString;
