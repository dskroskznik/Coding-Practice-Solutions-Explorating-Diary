/*
  December 28, 2023
  - Runtime Achieved: 2 ms
  - Memory Achieved: 45 MB
*/
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] array = new int[128];
        char[] r = ransomNote.toCharArray();
        char[] m = magazine.toCharArray();

        for(char i:m) {
            ++array[i];
        }
        for(char j:r) {
            if(array[j] == 0) {
                return false;
            }
            --array[j];
        }
        return true;
    }
}
