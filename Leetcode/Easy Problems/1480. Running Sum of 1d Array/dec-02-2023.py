# December 02, 2023
# - Runtime Achieved: 44 ms
# - Memory Achieved: 16.5 MB
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        #arr = [1] * len(nums)
        for x in range(1,len(nums)): nums[x]+=nums[x-1]
        return nums
