#  December 19, 2023
#  - Runtime Achieved: 54 ms
#  - Memory Achieved: 17.7 MB 
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hmap = {}
        for i in range(len(nums)):
            j = target - nums[i]
            if j in hmap:
                return [i, hmap[j]]
            hmap[nums[i]] = i
