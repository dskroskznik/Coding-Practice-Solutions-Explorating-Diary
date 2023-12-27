/*
  December 20, 2023
  - Runtime Achieved: 3 ms
  - Memory Achieved: 11.5 MB
*/
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> output;
        int index = 0;
        for(int x: nums) {
            int y = target - x;
            if(!(output.find(y) == output.end()))
                return {output[y], index};
            output[x] = index;
            index++;
        } 
        return {-1,-1};
    }
};
  
