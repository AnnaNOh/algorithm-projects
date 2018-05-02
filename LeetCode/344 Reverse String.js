// COMPLETED

// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".
//

var reverseString = function(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result = s[i] + result;
  }

  return result;
};

let a = 'stringtoreverse';
reverseString(a);
