/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// sol 1 -> the simplest solution a simple for loop
//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1]) return nums.length;
  else if (target < nums[0]) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;
    else if (nums[i] > target) return i;
  }
};
