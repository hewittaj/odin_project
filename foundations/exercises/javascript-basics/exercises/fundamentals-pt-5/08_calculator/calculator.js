const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let total = 0;
	for(let num of array){
    total += num;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for(let num of array){
    total *= num;
  }
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let total = 1;
	for(let i = 1; i <= num; i++){
    total *= i;
    console.log(num, total);
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

