// Still Working

// Reverse Integer
//
// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
// Input: 123
// Output:  321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only hold integers
// within the 32-bit signed integer range. For the purpose of this problem,
// assume that your function returns 0 when the reversed integer overflows.

// /**
//  * @param {number} x
//  * @return {number}
//  */

var reverse = function(x) {
  let result = "";
  let xString = String(x);


  let i = 0;
  while (i < xString.length){
    if (xString[i] === "-"){
      result = result + xString[i];
    } else {
      result = xString[i] + result;
    }
    i += 1;
  }

  result = Number(result);

  return result;
};
