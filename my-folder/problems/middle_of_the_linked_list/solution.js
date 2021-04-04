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
    let arr=[];
    let current = head;
    let prev = head;
    while(current){
        arr.push(head.val);
        current = current.next;
    }
    let mid = Math.floor(arr.length/2);
    
    console.log(mid)
    while(mid>0){
         prev = prev.next;
        mid--;
     }
    return prev;
};