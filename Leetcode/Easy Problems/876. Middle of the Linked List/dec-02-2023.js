/*
  December 02, 2023
  - Runtime Achieved: 50 ms
  - Memory Achieved: 41.7 MB
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var stride = head;
    while(stride && stride.next) {
        head = head.next;
        stride = stride.next.next;
    }
    return head;
};
