/**
 * @param {number[]} nums
 * @return {number}
 */
// My code
var majorityElement = function (nums) {
    let count = {}, max = 0, num = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1
        } else {
            count[nums[i]] = count[nums[i]] + 1
        }
    }
    for(let key in count){
        if(count[key] > max) {
            max = count[key]
            num = +key
        }
    }
    return num
};

export var majorityElement = function (nums){
    let k = 0, maxNum;
    for(let i = 0; i < nums.length; i++){
        if(k === 0) maxNum = nums[i];
        if(maxNum === nums[i]) k++;
        else k--;
    }
    return maxNum
}