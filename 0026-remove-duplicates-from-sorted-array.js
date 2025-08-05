/**
 * @param {number[]} nums
 * @return {number}
 */
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
