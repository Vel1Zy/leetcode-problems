/**
 * @param {number[]} digits
 * @return {number[]}
 */

// sol1
var plusOne = function (digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] < 10) {
      return digits;
    }

    digits[i] = 0;
  }
  digits.unshift(1);

  return digits;
};

// scratch 2
var plusOne = function (digits) {
  digits[digits.length - 1] += 1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > 9) {
      digits[i]--;
      digits[i - 1] += 1;
    } else break;
  }
  let res = [1];
  if (digits[0] > 9) {
    for (let i = 1; i <= digits.length; i++) {
      res[i] = digits[i - 1];
    }
    return res;
  } else return digits;
};

// scratch
var plusOne = function (digits) {
  let s = digits.join("");
  let sn = parseInt(s);
  sn += 1;
  s = String(sn);
  return s.map(Number);
};
