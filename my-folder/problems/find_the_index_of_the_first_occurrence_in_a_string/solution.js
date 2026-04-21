/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0; i<=haystack.length-needle.length;i++){
        let k=0;
        while(k<needle.length && needle[k]==haystack[i+k]){
            k++
        }
        if(k == needle.length){
            return i;
        }
    }
    return -1
};