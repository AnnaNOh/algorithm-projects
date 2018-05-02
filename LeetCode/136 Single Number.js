// COMPLETED

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

// SOMETHING TO REMEMBER:
// XOR with binary numbers:
// a ^ a = 0
// a ^ 0 = a
// so ...
// a ^ a ^ b = b

var singleNumber = function(nums) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};

let a = [1, 2, 2];
singleNumber(a);

// console.log(8 ^ 8);
// console.log(3 ^ 4 ^ 3);
