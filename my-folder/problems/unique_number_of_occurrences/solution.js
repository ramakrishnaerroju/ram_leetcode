/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hm = new Map();
    arr.forEach((item)=>{
        if(hm.has(item)){
            hm.set(item, hm.get(item)+1);
        }else{
            hm.set(item,1);
        }
    });
    
    return ([...new Set([...hm.values()])].length == [...hm.values()].length);
};