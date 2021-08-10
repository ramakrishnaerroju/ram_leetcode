/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let el = nums.length;
    let output=[]; 
    while(el>=1){ 
       if( nums.indexOf(el)== -1){
         output.push(el);
       } 
         el--; 
    } 
    return output;
};