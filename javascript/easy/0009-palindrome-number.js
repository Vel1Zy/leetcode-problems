/**
 * @param {number} x
 * @return {boolean}
 */

//Given an integer x, return true if x is a palindrome, and false otherwise.

// solution 3 - Optimization of solution 2
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};

var isPalindrome = function (x){
  if(x<0||x%10 === 0 && x !== 0) return false;
  let reversed = 0;
  while(x> reversed){
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversed || x === Math.floor(reversed / 10);

}

//solution 2 - try without converting it to string
var isPalindrome = function (x) {
  let w = 0;
  if(x==0) return false;
  if(x%10 == 0) return false;
  while (x > w) {
    let s = x % 10;

    w = w * 10 + s;
    x = Math.floor(x / 10);
  }
  
  if (x == w || x == Math.floor(w / 10)) return true;
  return false;
};

// solution 1 - easy way, converting it to string
var isPalindrome = function (x) {
  let x1 = String(x);
  if (x1.split("").reverse().join("") === x1) return true;
  else return false;
};
