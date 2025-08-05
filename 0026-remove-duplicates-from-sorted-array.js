/**
 * @param {number[]} nums
 * @return {number}
 */
// sol 2 -> Optimization -> without rewriting the whole array (Because in the problem it is not required to change the input array into a specific)
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[count] = nums[i + 1];
      count++;
    }
  }
  return count;
};

//sol 1 -> too inefficient the O(n^2) sol are badd
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let count = nums.length;
  for (let i = 0; i < nums.length - 1; i++) {
    while (true) {
      if (nums[i + 1] != nums[i]) break;
      for (let j = i + 1; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      count--;
    }
  }

  return count;
};
