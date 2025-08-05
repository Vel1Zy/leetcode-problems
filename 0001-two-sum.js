// classic leetcode-1 problem
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(N) Solution try 2 using map
var twoSum = function (nums, target) {
  let ans = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      ans.push(i);
      ans.push(map.get(target - nums[i]));
      break;
    }
    map.set(nums[i], i);
  }

  return ans;
};

// O(N) Solution try 1 (.includes() still has to loop through every single element)
var twoSum = function (nums, target) {
  let ans = [];
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(target - nums[i])) {
      ans.push(i);
      ans.push(arr.indexOf(target - nums[i]));
      break;
    }
    arr.push(nums[i]);
  }
  return ans;
};

// O(N^2) Solution
var twoSum = function (nums, target) {
  let ans = [];
  let checkFound = false;
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 == nums.length) break;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        ans.push(i);
        ans.push(j);
        checkFound = true;
      }
    }
    if (checkFound) break;
  }
  return ans;
};
