// ###Lyrics... Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a plane pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' longest 'slide down'. For example,

// longestSlideDown [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]] 
// -- => 23
// ###By the way... My tests include some extraordinarily high pyramides so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// (c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

function longestSlideDown (pyramid) {
  [res, val1, val2] = [pyramid[0], 0, 0]
  
  for(let i = 1; i < pyramid.length; i++) {
    for(let j = 0; j < pyramid[i].length; j++){
      val1 = pyramid[i - 1][j - 1] || 0;
      val2 = pyramid[i - 1][j] || 0;
      pyramid[i][j] += Math.max(val1, val2);      
    }
  }
  
  return Math.max(...pyramid.slice(-1)[0]);
}