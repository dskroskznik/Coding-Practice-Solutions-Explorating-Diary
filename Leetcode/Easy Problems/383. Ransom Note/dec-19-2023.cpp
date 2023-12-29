/*
  December 19, 2023
  - Runtime Achieved: 12 ms
  - Memory Achieved: 9.8 MB
*/
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char,int> chart;
        bool result = true;
        string a = ransomNote;
        string b = magazine;

        for(char i:b) {
            chart[i]++;
        }
        for(char j:a) {
            if(chart[j] == 0)
                result = false;
            chart[j]--;  
        }
        return result;
    }
};
