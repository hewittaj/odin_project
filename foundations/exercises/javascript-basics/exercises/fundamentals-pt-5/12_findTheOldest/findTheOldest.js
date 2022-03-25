const findTheOldest = function(people) {
    let maxAge = 0;
    let tempAge = 0;
    let oldestPerson;
    for(let person of people){
        if(person["yearOfDeath"] === undefined){
            let currYear = new Date().getFullYear();
            tempAge = currYear - person["yearOfBirth"];
        }
        else{
            tempAge = person["yearOfDeath"] - person["yearOfBirth"];
        }

        if(tempAge > maxAge){
            maxAge = tempAge;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
