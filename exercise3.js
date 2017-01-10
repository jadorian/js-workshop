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
  return value * 2;
});


// Tests (don't modify)
if (array.length === 3 &&
    array[0] === 4 &&
    array[1] === 6 &&
    array[2] === 8) {
  console.log('Exercise 3 tests pass!');
} else {
  console.log('Exercise 3 tests fail!');
}
