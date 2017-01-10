/*
 * Exercise 2: Given an array of people, return the hair color
 * of the oldest person.
 *
 * A person is an object with the following attributes:
 *    firstName: String
 *    lastName: String
 *    age: Number
 *    hairColor: String
 */

var hairColor = function(people) {
  // TODO: Your code here!
  // ...
  return 'rainbow';
};


// Tests (don't modify)
var person1 = {
  firstName: 'Taylor',
  lastName: 'Swift',
  age: 27,
  hairColor: 'Blonde'
};
var person2 = {
  firstName: 'Kit',
  lastName: 'Harrington',
  age: 30,
  hairColor: 'Dark brown'
};
var person3 = {
  firstName: 'Eric',
  lastName: 'Cartman',
  age: 10,
  hairColor: 'Brown'
};

var people1 = [person1];
var people2 = [person1, person3];
var people3 = [person1, person2, person3];

if (hairColor(people1) === 'Blonde' &&
    hairColor(people2) === 'Blonde' &&
    hairColor(people3) === 'Dark brown') {
  console.log('Exercise 2 tests pass!');
} else {
  console.log('Exercise 2 tests fail!');
}
