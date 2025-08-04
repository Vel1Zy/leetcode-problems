/**
 * @param {string} s
 * @return {number}
 */

//sol2 -> Optimization of first Sol (Space Complexity),
// turns out it stays the same, Because each lookup from roman[s[i]] will create a new temp variable that would be deleted after, technically the same as sol1
// this is because the variables initialized inside the for loop will dissapear after the for loop's finished.
// Interestingly this is slower, because of the same lookup done twice. This means more variables are created during the operations, which led to slower overall.
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = roman[s[s.length - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    if (roman[s[i]] < roman[s[i + 1]]) total -= roman[s[i]];
    else total += roman[s[i]];
  }
  return total;
};

// sol1
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  total += roman[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    let currentValue = roman[s[i]];
    let valueAfter = roman[s[i + 1]];

    if (currentValue < valueAfter) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
};
