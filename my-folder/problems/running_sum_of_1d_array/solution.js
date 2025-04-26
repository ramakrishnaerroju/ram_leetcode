/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let output = [];
    for (i = 0; i < nums.length; i++) {
        let innerSum = 0;
        for (j = 0; j <= i; j++) {
            innerSum += nums[j];
        }
        output.push(innerSum);
    }
    return output;
};