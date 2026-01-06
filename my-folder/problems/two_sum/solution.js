/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i=0;i<nums.length;i++){
       let r = target - nums[i];
       if(map[r] !== undefined){
        return [map[r], i];
       }
       map[nums[i]] = i; 
    }
    
};