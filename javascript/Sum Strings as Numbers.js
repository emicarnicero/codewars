// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  a = a.replace(/^0+/, '');
  b = b.replace(/^0+/, '');
  
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