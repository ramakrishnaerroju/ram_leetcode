/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    let length = arr.length;
    for(let i=0;i<length-2;i++){
        for(let j=i+1;j<length-1;j++){
            for(let k=j+1;k<length;k++){
                if(Math.abs(arr[i]-arr[j])<=a && Math.abs(arr[i]-arr[k])<=c &&                           Math.abs(arr[j]-arr[k])<=b){
                    count++;
                }
            }
        }
    }
    return count;
};