/**
 * @param {string} s
 * @return {number}
 */

//sol 3 - testing solutions
var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};
var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");

  return words[words.length - 1].length;
};

// sol 2 without reversing; looping starting from all the way back
var lengthOfLastWord = function (s) {
  if (!s || s.length === 0) return 0;
  let ans = 0;
  s = s.trim();
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") ans++;
    else break;
  }
  return ans;
};

//sol 1 simple solution of lengthOfLastWord with reverse
var lengthOfLastWord = function (s) {
  let reversed = s.split("").reverse().join("").trim();
  console.log(s);
  let i = 0;
  while (reversed[i] !== " " && i < reversed.length) {
    i++;
  }

  return i;
};
