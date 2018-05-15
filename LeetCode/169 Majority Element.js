// COMPLETED

// Time: O(n)
// Space: O(1)

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.


var majorityElement = function(nums) {
  let result = nums[0];
  let counter = 1;
  
  for (let i = 1; i < nums.length; i++){
    if (result === nums[i]){
      counter += 1;
    } else {
      counter = counter - 1;
      if (counter === 0){
        result = nums[i+1];
      }
    }
    
  }
  return result;  
};


let b = [3,2,3];
let a = [2,2,1,1,1,2,2];

console.log(majorityElement(b));
console.log(majorityElement(a));

let c = [5,6,6];
console.log(majorityElement(c));
