// HINT:
// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Q2
// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that
// is to be counted (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.
let str = "";
function countChar(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("BananaBabyBubbles", "u"));
console.log(countChar("BananaBabyBubbles", "a"));
console.log(countChar("BananaBabyBubbles", "Z"));

// -------------------------------------------------------------------------
/*console.log('Q2: ', countChar('BananaBabyBubbles', 'u'));
console.log('Q2: ', countChar('BananaBabyBubbles', 'a'));
console.log('Q2: ', countChar('BananaBabyBubbles', 'Z'));*/
