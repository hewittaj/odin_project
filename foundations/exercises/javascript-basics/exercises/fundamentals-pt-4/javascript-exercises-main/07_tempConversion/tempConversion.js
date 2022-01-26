// Function converts fahreneit to celcius, rounded to the nearest tenth
// C = (F - 32) * 5/9
const ftoc = function(temp) {
    let final = 0;
    final = (temp - 32) * 5/9;

    return parseFloat(final.toFixed(1));
};

// F = (C * 9/5) + 32
// Function converts celsius to fahrenheit, rounded to the nearest tenth
const ctof = function(temp) {
    let final = 0;
    final = (temp * 9/5) + 32

    return parseFloat(final.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
