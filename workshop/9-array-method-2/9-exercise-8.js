/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q8
// Returns true if every element of lst is of length at least 5.
// Otherwise returns false.

let allLong1 = ["Scott", "Bob", "Ric", "Jim"];
let allLong2 = ["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"];

let selectedLong1 = allLong1.every(function (item) {
  return item.length >= 5;
});

let selectedLong2 = allLong2.every(function (item) {
  return item.length >= 5;
});

console.log(selectedLong1);
console.log(selectedLong2);
