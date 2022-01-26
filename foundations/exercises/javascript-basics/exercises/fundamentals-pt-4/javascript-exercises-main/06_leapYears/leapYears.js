// This function takes a year and returns if it was a leap year or not. True = a leap year; False = not a leap year.
const leapYears = function(year) {
    // Detect if year is divisible by 4
    if(year % 4 == 0){
        // Detect if year divisible by 400 true
        if(year % 400 == 0){
            return true;
        }

        if(year % 100 == 0) {
            return false;
        }

        return true;
    }

    else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
