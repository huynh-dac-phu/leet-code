// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
//  My code
// var removeDuplicates = function (nums) {
//     var dupN = [], count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (dupN.includes(nums[i])) {
//             nums[count] = nums[i + 1]
//         } else {
//             nums[count] = nums[i]
//             dupN.push(nums[i])
//             count++
//         }
//     }
//     return dupN.length;
// };

export const removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  console.log(index)
  return index;
};
