// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
// My code
var removeDuplicates = function (nums) {
  let k = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== nums[i + 2] || nums[i] !== nums[i + 1]) {
      k++;
      nums[k] = nums[i + 1];
    }
  }
  return k;
};

export var removeDuplicates = function (nums) {
  let count = 1,
    k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[k]) {
      if (count < 2) {
        nums[++k] = nums[i];
        count++;
      }
    } else {
      nums[++k] = nums[i];
      count = 1;
    }
  }
  return k + 1;
};
