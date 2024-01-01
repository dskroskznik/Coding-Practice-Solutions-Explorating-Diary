/**
  December 26, 2023    
  - Runtime Achieved: 86 ms
  - Memory Achieved: 47.6 MB
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let merge = [];

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            merge.push(nums1[i])
            i++;
        }
        else {
            merge.push(nums2[j])
            j++;
        } 
    }
    while(i<nums1.length) merge.push(nums1[i++]);
    while(j<nums2.length) merge.push(nums2[j++]);
    
    let middle = Math.floor(merge.length/2);
    if(merge.length % 2 === 0) return (merge[middle-1] + merge[middle])/2;
    else return merge[middle];
};
