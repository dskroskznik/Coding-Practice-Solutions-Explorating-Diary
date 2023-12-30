# December 20, 2023
# - Runtime Achieved: 55 ms 
# - Memory Achieved: 16.5 MB
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        temp = {}
        ln = len(s)
        n, ll = 0, 0
        for lr in range(ln): # runs through str to lr
            uchar = s[lr] # new character stored
            if uchar in temp and ll <= temp[uchar]:
                ll = 1 + temp[uchar] # adds count of mutiples
            else:
                n = max(n,lr-ll+1) # finds max count from ll multiples minus str length + 1
            temp[uchar] = lr
        return n
