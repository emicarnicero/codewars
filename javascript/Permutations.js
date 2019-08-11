// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// The order of the permutations doesn't matter.

function permutations(string) {
  let [words, nums] = [[], []];
  let max = parseInt(string.split('').reduce((acc, curr, i) => acc = i + 1 + acc, ''));
  let min = parseInt(max.toString().split('').reverse('').join(''));
  let n = min;

  while(n <= max) {
    if(n.toString().split('').sort().join('') === min.toString()) {
      nums.push(n);
    }
    n++;
  }
  
  nums.forEach(val => {    
    words.push(val.toString().split('').reduce((acc, curr) => acc.concat(string[curr - 1]), ''));
  })
    
  return [...new Set(words.sort())];
}