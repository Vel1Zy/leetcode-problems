/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//sol 2 -> try implementing my own solution
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  // needle akan di slide sepanjang haystack (tinggal handle out of boundsnya aja);
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (j === needle.length - 1 && needle[j] === haystack[i + j]) return i;
      if (needle[j] === haystack[i + j] && j < needle.length - 1) continue;
      else break;
    }
  }

  return -1;
};

// sol 1 -> this problem, simply explained the function indexOf in JavaScript
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
