/*
 * Exercise 3: Double the contents of the array.
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 */

var doubleArray = function(array, callback) {
  array.forEach(function(value, index, arr) {
    arr[index] = callback(value);
  });
};

var array = [2, 3, 4];

doubleArray(array, function(value) {
  // TODO: Your code here!
  // ...
});


// Tests (don't modify)
if (result.length === 3 &&
    result[0] === 4 &&
    result[1] === 6 &&
    result[2] === 8) {
  console.log('Exercise 3 tests pass!');
} else {
  console.log('Exercise 3 tests fail!');
}
