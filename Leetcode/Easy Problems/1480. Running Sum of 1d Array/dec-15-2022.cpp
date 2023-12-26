/*
  December 15, 2022
  - Runtime Achieved: 0 ms
  - Memory Achieved: 8.6 MB
*/
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> runSum(nums.size());
        runSum[0] = nums[0];
        for(int s=1;s<nums.size();s++) {
            runSum[s] = runSum[s - 1] + nums[s];
        }
        return runSum;
    }
};
