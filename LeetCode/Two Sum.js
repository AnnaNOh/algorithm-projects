// COMPLETED

// Two Sum
//
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// Time Complexity O(n) with Hash



var twoSum = function(nums, target) {
  let numsHash = {};
  let i = 0;
  let otherHalf = 0;

  while (i < nums.length) {
    otherHalf = target - nums[i];

    // return indexes if the other number needed to sum up to target
    // was already stored
    if (numsHash.hasOwnProperty(otherHalf) && numsHash[otherHalf] !== i ) {
      return [numsHash[otherHalf], i];
    }

    // else store the new element and index position
    numsHash[nums[i]] = i;
    i += 1;
  }

};
