// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {
  /* if (0 <= num1 || num2 < 10) {
    for (a = 0; a < 10; a++) {
      let power1 = Math.pow(a, 1);
      let sum = a;
      if (power1 == sum) {
        console.log(power1);
      }
    }
  }

  if (10 <= num1 || num2 < 100) {
    for (a = 0; a < 10; a++) {
      for (b = 0; b < 10; b++) {
        let power2 = Math.pow(a, 2) + Math.pow(b, 2);
        let sum2 = a * 10 + b;
        if (power2 == sum2) {
          console.log(power2);
        }
      }
    }
  }

  if (100 <= num1 || num2 < 1000) {
    for (a = 0; a < 10; a++) {
      for (b = 0; b < 10; b++) {
        for (c = 0; c < 10; c++) {
          let power3 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
          let sum3 = a * 100 + b * 10 + c;
          if (power3 == sum3) {
            console.log(power3);
          }
        }
      }
    }
  }

  if (1000 <= num1 || num2 < 10000) {
    for (a = 0; a < 10; a++) {
      for (b = 0; b < 10; b++) {
        for (c = 0; c < 10; c++) {
          for (d = 0; d < 10; d++) {
            let power4 =
              Math.pow(a, 4) + Math.pow(b, 4) + Math.pow(c, 4) + Math.pow(d, 4);
            let sum4 = a * 1000 + b * 100 + c * 10 + d;
            if (power4 == sum4) {
              console.log(power4);
            }
          }
        }
      }
    }
  }
*/
  if ((num1, num2 <= 99999)) {
    for (a = 0; a < 10; a++) {
      for (b = 0; b < 10; b++) {
        for (c = 0; c < 10; c++) {
          for (d = 0; d < 10; d++) {
            for (e = 0; e < 10; e++) {
              let power5 =
                Math.pow(a, 5) +
                Math.pow(b, 5) +
                Math.pow(c, 5) +
                Math.pow(d, 5) +
                Math.pow(e, 5);
              let sum5 = a * 10000 + b * 1000 + c * 100 + d * 10 + e;
              if (power5 == sum5) {
                console.log(power5);
              }
            }
          }
        }
      }
    }
  }
}
// write your loop here...

console.log(identifyArmstrongNumbers(100, 99999));
