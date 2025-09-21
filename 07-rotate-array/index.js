/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  my code
var rotate = function(nums, k) {
    let rotate = k % nums.length;
    for(let i = 0; i < rotate; i++){
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
    }
};  

export var rotate = function(nums, k) {
    let l = nums.length; // 7
    k = k % l; // 2
    let rotated = new Array(l).fill(0);

    for(let i = 0; i < l; i++){
        rotated[(i + k) % l] = nums[i]
    }

    for(let i = 0; i < l; i++){
        nums[i] = rotated[i]
    }
}
