// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org

function solution(list) {
  let res = [[list[0], undefined]];
  
  for (let i = 0; i < list.length - 1; i++) {
    if(Math.abs(list[i] - list[i + 1]) === 1) {
      res[res.length - 1] = [res[res.length - 1][0], list[i + 1]]
    } else {
      res.push([list[i + 1], undefined]);
    }
  }
  
  for(let i = 0; i < res.length; i++) {
    if(Math.abs(res[i][0] - res[i][1]) === 1) {
      res.splice(i + 1, 0, [res[i][1], undefined]);
      res[i] = [res[i][0], undefined];
      i++;
    }
  }
  
  return res.map(val => val[1] ? val[0]  + '-' + val[1] : val[0]).join(',')
}