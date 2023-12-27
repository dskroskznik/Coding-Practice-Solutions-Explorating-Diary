/*
  December 19, 2023
  - Runtime Achieved: 47 ms
  - Memory Achieved: 43.3 MB
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict={}
    for (let i = 0; i < nums.length; i++) {
        let a = target - nums[i];
        if (a in dict) {
            return [dict[a], i];
        }
        dict[nums[i]] = i;
    }
    return null;
};
