/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // handle edge case
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (n == 0) {
    return 0;
  }

  //base case for fibo
  let oneStep = 1;
  let twoStep = 2;
  let possibleWays = 0;
  for (let i = 3; i <= n; i++) {
    possibleWays = twoStep + oneStep;
    oneStep = twoStep;
    twoStep = possibleWays;
  }
  return possibleWays;
};

/*
Ways(1) = 1

Ways(2) = 2

Ways(3) = Ways(2) + Ways(1) = 2 + 1 = 3

Ways(4) = Ways(3) + Ways(2) = 3 + 2 = 5

Ways(5) = Ways(4) + Ways(3) = 5 + 3 = 8
 */

// this is a fibonacci sequence problem. However starting fibo 18 to fibo 45 the time it takes to do the recursive function will be astronomically high
// in this case we will use the dynamic approach

// n = 4 -> 5
// 1111
// 112
// 121
// 211
// 22
// n = 5 -> 8
// 11111
// 1112
// 1121
// 1211
// 2111
// 122
// 212
// 221
