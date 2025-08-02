/**
 * @param {number} x
 * @return {boolean}
 */

//Given an integer x, return true if x is a palindrome, and false otherwise.

//solution 2 - try without converting it to string
var isPalindrome = function (x) {
  let w = 0;
  while (x > w) {
    let s = x % 10;

    w = w * 10 + s;
    x = Math.floor(x / 10);
  }
  if (x == w || x == Math.floor(w / 10)) return true;
  return false;
};
if (s === 0) return false;
else {
  reversedNumber = reversedNumber * 10 + s;
}

// solution 1 - easy way, converting it to string
var isPalindrome = function (x) {
  let x1 = String(x);
  if (x1.split("").reverse().join("") === x1) return true;
  else return false;
};
