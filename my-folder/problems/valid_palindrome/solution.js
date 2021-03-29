/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /[A-Za-zÀ-ȕ0-9]/;
    for(let start=0, end=s.length-1;start<end;start++,end--){
       
        while(start<end && !regex.test(s[start].toString())){
            start++;
        }
        while(start<end && !regex.test(s[end].toString())){
            end--;
        } 
        if(s[start].toLowerCase()!=s[end].toLowerCase()){
            return false;
        }
    }
    return true;
}; 




