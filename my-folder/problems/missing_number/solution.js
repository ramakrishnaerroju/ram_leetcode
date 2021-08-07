/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const total = nums.reduce((sum,num)=>sum+=num);
    let sum= nums.length * (nums.length+1)/2; 
    return sum-total;
};