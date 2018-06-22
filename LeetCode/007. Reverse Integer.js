// Completed

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
  let res = 0;
  let str = String(x);

  for (let i = str.length-1; i >= 0 ; i = i-1){
    if (str[i] === "-"){
      res = res * -1
    } else {
      res = res * 10 + Number(str[i]);
    }
  }
  
  if (res <= -1 * Math.pow(2, 31)) return 0;
  if (res >= Math.pow(2, 31) - 1) return 0;
  return res;  
};

let a = 1534236469;
reverse(a);
