// COMPLETE

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

var moveZeroes = function(nums) {
  let leftIdx = 0;
  let nonZeroIdx;

  while (leftIdx < nums.length) {
    nonZeroIdx = leftIdx;
    if (nums[leftIdx] === 0) {
      while (nums[nonZeroIdx] === 0) {
        if (nonZeroIdx === nums.length - 1) {
          break;
        }
        nonZeroIdx += 1;
      }
      nums[leftIdx] = nums[nonZeroIdx];
      nums[nonZeroIdx] = 0;
    }
    leftIdx += 1;
  }
};

// let a = [0, 1, 0, 3, 12];
let a = [1, 0];
moveZeroes(a);
console.log(a);
