/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hMap = new Map();
 
    for(let i=0;i<nums.length;i++){
        if(hMap.has(target-nums[i])){
            return [hMap.get(target-nums[i]),i]
        }else{
            hMap.set(nums[i],i);
        }
    }
    return null;
};