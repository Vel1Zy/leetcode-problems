/**
 * @param {number} x
 * @return {number}
 */

/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

// sol3 -> Improvement using binary
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (BigInt(mid) * BigInt(mid) <= x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

// sol2  -> improvement from sol1 -> this one takes way too to solve it.
// -> coba improvement dengan mulai loop dari x / 2 -- failed!!
// -> coba improvement
var mySqrt = function (x) {
  for (let i = Math.floor(x / 2); i > 0; i++) {
    if (i * i > x) return i - 1;
    else if (i * i == x) return i;
  }
};

// sol1
// 1. solution/rumus untuk Square Root
// 2. round down bikin rumus lagi sendiri
// 3. tapi ini gaboleh pake rumus. -> cara paling cepet cari angka yang kalo di pangkat itu hasilnya paling deket sama hasil yang diminta (dan kasih value yang lebih kecil, karena ada pembulatan ke bawah.
var mySqrt = function (x) {
  for (let i = 1; i > 0; i++) {
    if (i * i > x) return i - 1;
    else if (i * i == x) return i;
  }
};
