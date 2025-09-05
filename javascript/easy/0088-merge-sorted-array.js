/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// sol 2-> avoid creating a new array for better space complexity
// if I start from the beginning I will have to move the rest of num 1
// let's try from the end
var merge = function (nums1, m, nums2, n) {
  let p1 = m + n - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; (i = 0); i--) {}
};

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/
var merge = function (nums1, m, nums2, n) {
  let numTemp = [...nums1];
  let i = 0;
  let j = 0;
  let curr = 0;
  while (curr < m + n) {
    if (i < m && j < n) {
      if (numTemp[i] <= nums2[j]) {
        nums1[curr] = numTemp[i];
        i++;
      } else {
        nums1[curr] = nums2[j];
        j++;
      }
      curr++;
    } else if (j >= n && i < m) {
      nums1[curr] = numTemp[i];
      i++;
      curr++;
    } else if (i >= m && j < n) {
      nums1[curr] = nums2[j];
      j++;
      curr++;
    } else {
      break;
    }
  }
};
