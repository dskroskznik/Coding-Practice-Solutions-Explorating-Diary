/*
  December 23, 2023
  - Runtime Achieved: 0 ms 
  - Memory Achieved: 7.5 MB
*/
class Solution {
public:
    int minOperations(string s) {
        int len = s.length();
        int n = 0;
        for (int i = 0; i < len; i++) {
            if (i % 2) {
                if (s[i] == '1') {
                    n++;
                }
            } else {
                if (s[i] == '0') {
                    n++;
                }
            }
        }
        return min(len - n, n);
    }   
};
