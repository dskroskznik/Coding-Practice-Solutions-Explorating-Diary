/*
  December 02, 2023
  - Runtime Achieved: 0 ms
  - Memory Achieved: 42 MB
*/
class Solution {
    public int[] runningSum(int[] nums) {
        for(int i=1;i<nums.length;i++) {
            nums[i] += nums[i-1];
        }
        return nums;
    }
}
