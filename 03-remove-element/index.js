// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = function(nums, val) {
    var count = 0;
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] !== val) {
            nums[count] = nums[i]
            count++
        }
    }
    return count
};