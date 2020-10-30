/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let ns=nums.sort((a,b)=>b-a);
    return ns[k-1];
};