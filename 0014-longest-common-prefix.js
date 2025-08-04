/**
 * @param {string[]} strs
 * @return {string}
 */

//solution 4 - using sorted array to find the prefix
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  strs.sort();
  let ans = strs[0];
  let lastStr = strs[strs.length - 1];
  let i = 0;
  while (i < ans.length && ans[i] == lastStr[i]) {
    i++;
  }
  return ans.substring(0, i);

  //return a substr (0, x);
};

//solution 3 - trying different approach (horizontal approach)
// the prefix guess is the whole first string

/*
["flower","flow","flight"]
*/
var longestCommonPrefix = function (strs) {
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.slice(0, -1);
      if (ans === "") return "";
    }
  }

  return ans;
};

//solution 2 - improvement from sol 1
var longestCommonPrefix = function (strs) {
  let initial = strs[0];
  let ans = 0;

  for (let i = 0; i < initial.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (initial[i] == strs[j][i]) continue;
      else if (i == 0 && initial[i] !== strs[j]) return "";
      else return initial.substring(0, ans);
    }
    ans++;
  }

  return initial.substring(0, ans);
};

// solution 1 (vertical scanning)
var longestCommonPrefix = function (strs) {
  // Ill get the first string as the key
  // compare each of the character from the string to the others.
  let initialStr = strs[0];

  let c = 0; //index character
  let ans = 0; // curr answer

  // vertical scanning
  let b = false;

  for (let i = 0; i < initialStr.length; i++) {
    // index character
    for (let j = 0; j < strs.length; j++) {
      // index string
      if (initialStr[i] == strs[j][i]) {
        continue;
      } else if (i == 0 && initialStr[i] !== strs[j][i]) {
        return "";
      } else {
        b = true;
        break;
      }
    }
    if (b) {
      break;
    }
    ans += 1;
  }

  return initialStr.substring(0, ans);
};
