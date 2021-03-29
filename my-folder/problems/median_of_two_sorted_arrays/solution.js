var findMedianSortedArrays = function(nums1, nums2) {
    let x=0,y=0;
    let length1=nums1.length;
    let length2=nums2.length;
    let output=[];
    while(x<length1 && y<length2){
        if(nums1[x]<nums2[y]){
            output.push(nums1[x]);
          x++;
        }else{
              output.push(nums2[y]);
          y++;
        }
    }
    while(x<length1){
        output.push(nums1[x]) ;
      x++;
    }
     while(y<length2){
        output.push(nums2[y]); y++;
    }
    
        let median=0;
    if(output.length%2 == 0){
        let position = output.length/2;
        median = ((output[position-1]+output[position])/2).toFixed(5); 
    }else{
        median  = output[Math.floor(output.length/2)]; 
    }
    
    return median;
};
console.log(findMedianSortedArrays([1,3,4,5,6],[2]));



