/**
 * @param {string} s
 * @return {number}
 */

/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
*/
var myAtoi = function (s) {
  let res = "";
  let positive = true;
  let leadingZero = true;

  for (let i = 0; i < s; i++) {
    if (s[i] === " ") continue;
    else if (s[i] === "-" || s[i] === "+") {
      positive = s[i] === "+";
    } else if (s[i] === "0" && leadingZero === true) {
      continue;
    } else if (/^[0-9]$/.test(s[i])) {
      res.push(s[i]);
    }
  }
};
