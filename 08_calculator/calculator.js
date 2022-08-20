const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
let total = arr[0]
for (let i = 1; i < arr.length; i++){
  total = arr[i] * total;
}
return total;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let product = 1;
	for(i = 1; i <= a; i++){
    product = product * i;
  }
  return product;
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
