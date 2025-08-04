/**
 * @param {string} s
 * @return {boolean}
 */

//solution 3 -> Improving Readability
var isValid = function (s) {
  let stack = [];
  const pairing = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const c of s) {
    if (pairing[c]) {
      if (stack.pop() !== pairing[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
};

// solution 2 -> this will count for the opening followed by a clossing -> to solve this I will also use a Stack, so if the stack has ( and another ) comes in, the stack will be cleared.
var isValid = function (s) {
  if (!s || s === "") return false; // edge case handling
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      if (s[i] === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else return false;
      } else if (s[i] === "}") {
        if (stack[stack.length - 1] === "{") stack.pop();
        else return false;
      } else if (s[i] === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else return false;
      }
    }
  }

  return stack.length === 0;
};

// initial solution -> doesn't count for )(, because it only counts the amount
var isValid = function (s) {
  if (!s || s === "") return false;
  let a = s.split("");
  let x = new Array().fill(0);
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(" || a[i] == ")") x[0]++;
    else if (a[i] == "{" || a[i] == "}") x[1]++;
    else if (a[i] == "[" || a[i] == "]") x[2]++;
  }

  if (x[0] % 2 == 1 || x[1] % 2 == 1 || x[2] % 2 == 1) return false;
  else return true;
};
