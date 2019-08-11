// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

snail = function(array) {
  let res = [];
  
  while(array.length > 0) {
    res = [...res, ...array[0]];
    
    array.splice(0, 1);
    
    if(array.length > 0) {
      array = array[0].map((col, i) => array.map(row => row[i])).reverse();
    }
  }
  
  return res;
}
