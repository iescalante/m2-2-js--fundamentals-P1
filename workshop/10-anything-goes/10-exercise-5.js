// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371
let array = [];
function armstrongNumbers() {
  for (a = 0; a < 10; a++) {
    for (b = 0; b < 10; b++) {
      for (c = 0; c < 10; c++) {
        let cubeNumber = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
        let sum = a * 100 + b * 10 + c;
        let arrArmstrongNumbers = [sum];
        if (cubeNumber == sum) {
          console.log(arrArmstrongNumbers);
        }
      }
    }
  }
}
// write your loop here...
console.log(armstrongNumbers());
