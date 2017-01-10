/*
 * Exercise 1: Implement a function that returns the sum of all the elements
 * in the array.
 */

var arraySum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; ++i) {
    sum += array[i];
  }
  return sum;
};

// Tests (don't modify)
var a = [1, 2, 3, 4, 5];
var b = [-1, -2, -3, -4, -5];
var c = [2];

if (arraySum(a) === 15 &&
    arraySum(b) === -15 &&
    arraySum(c) === 2) {
  console.log('Exercise 1 tests pass!');
} else {
  console.log('Exercise 1 tests fail!');
}
