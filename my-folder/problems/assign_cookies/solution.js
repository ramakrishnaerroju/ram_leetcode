/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gg=g.sort((a,b)=> a-b);
    let ss=s.sort((a,b)=> a-b);
    let child=0;
    let cookie = 0;
    while(child<gg.length && cookie < ss.length){
        if(ss[cookie]>=gg[child]){
           
            child+=1
        }
         cookie+=1
    }
    return child;
};