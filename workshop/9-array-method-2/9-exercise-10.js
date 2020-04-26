// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
let grades = [];
function calculateAverage(grades) {
  let sum = grades.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (Math.round(sum / grades.length) < 60) {
    return "F";
  }
  if (Math.round(sum / grades.length) < 70) {
    return "D";
  }
  if (Math.round(sum / grades.length) < 80) {
    return "C";
  }
  if (Math.round(sum / grades.length) < 90) {
    return "B";
  }
  if (Math.round(sum / grades.length) < 100) {
    return "A";
  }
}
console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
