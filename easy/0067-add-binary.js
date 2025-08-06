/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

//sol1 -> for binary we will use (binary1 + binary2 + carry) % 2 ->
var addBinary = function (a, b) {
  let binary1 = a.length - 1;
  let binary2 = b.length - 1;

  let carry = 0;

  let result = [];

  while (binary1 >= 0 || binary2 >= 0 || carry > 0) {
    const digitA = binary1 >= 0 ? parseInt(a[binary1]) : 0;
    const digitB = binary2 >= 0 ? parseInt(b[binary2]) : 0;

    const sum = digitA + digitB + carry;
    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);

    binary1--;
    binary2--;
  }

  return result.join("");
};
