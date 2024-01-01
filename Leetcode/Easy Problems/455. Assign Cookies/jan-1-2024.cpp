/*
  January 1, 2024
  - Runtime Achieved: 64 ms 
  - Memory Achieved: 17.8 MB
*/
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        std::sort(g.begin(), g.end());
        std::sort(s.begin(), s.end());
        int gsize = g.size();
        int ssize = s.size();
        int i = 0, j = 0, count = 0;
        if (gsize == 0 || ssize == 0) return 0;
        while (i < gsize && j < ssize) {
            if (s[j] >= g[i]) {
                count++;
                i++;
            }
            j++;
        }
        return count;
    }
};
