// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99"); -> "110"

// Notes

// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  [str1, str2] = a.length >= b.length ? [a, b] : [b, a];
  
  [carry, d1, d2, res, total] = [0, 0, 0, 0, []];
  
  for(let i = 1; i <= str1.length; i++) {
    d1 = parseInt(str1[str1.length - i]);
    d2 = parseInt(str2[str2.length - i] ? parseInt(str2[str2.length - i]) : 0);
    res = i !== str1.length ? parseInt((d1 + d2 + parseInt(carry ? carry : 0)).toString().slice(-1)) : parseInt((d1 + d2 + parseInt(carry ? carry : 0)).toString().slice(0));
    carry = parseInt('0' +(d1 + d2 + parseInt(carry ? carry : 0)).toString().slice(0, -1));    
    total.push(res);
  }
  
  return (total).toString().split(',').reverse().join('');  
}