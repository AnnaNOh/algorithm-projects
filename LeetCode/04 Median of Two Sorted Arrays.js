// COMPLETED

//
// Example
// Array A = [1,2,3]
// Array B = [4,5,6]
//
// Index ia starts in the middle of A
// Index ib starts in the middle of B
//
// Then it's three main cases:
// 1. Median is too little
// If A[ia] is less than the B[ib -1], move A[ia] over right once
//
// 2. Median is right
//
// 3. Median is too big

// Base cases:
// The smaller array has only one element
// Case 0: N = 0, M = 2
// Case 1: N = 1, M = 1.
// Case 2: N = 1, M is odd
// Case 3: N = 1, M is even
// The smaller array has only two elements
// Case 4: N = 2, M = 2
// Case 5: N = 2, M is odd
// Case 6: N = 2, M is even

// Else:
// 1) Find the middle item of A[] and middle item of B[].
// …..1.1) If the middle item of A[] is greater than middle item of B[], ignore the last half of A[], let length of ignored part is idx. Also, cut down B[] by idx from the start.
// …..1.2) else, ignore the first half of A[], let length of ignored part is idx. Also, cut down B[] by idx from the last.

let evenMedian = function(num1, num2){
  return (num1 + num2)/2;
}

var findMedianSortedArrays = function(nums1, nums2) {
    console.log("nums1", nums1);
    console.log("nums2", nums2);
    // make nums1 have shorter length
    if (nums1.length > nums2.length){
      let temp = nums1;
      nums1 = nums2;
      nums2 = temp;
    }

    // calculating mid of nums2 
    let mid = 0,
        mid2 = 0;
    if (nums2.length % 2 === 0){
      mid2 = nums2.length/2 - 1;
      mid = mid2 + 1;
    } else {
      mid = (nums2.length-1)/2;
    }
    
    // base case 0: N = 0, M = 2
    if (nums1.length === 0){
      if (nums2.length % 2 === 0){
        return evenMedian(nums2[mid], nums2[mid2]) 
      } else {
        return nums2[mid];
      }
    }
    
    if (nums1.length === 1){
      // base case 1: N = 1, M = 1
      if (nums2.length === 1){
        return (nums1[0] + nums2[0])/2;
      // base case 2: N = 1, M is odd
      } else if (nums2.length % 2 === 1){
        if (nums1[0] < nums2[mid-1]){
          return evenMedian(nums2[mid-1], nums2[mid]);
        } else if (nums1[0] >= nums2[mid-1] && nums1[0] <= nums2[mid+ 1]){
          return evenMedian(nums1[0], nums2[mid]);
        } else {
          return evenMedian(nums2[mid], nums2[mid+1]);
        }
      // base case 3: N = 1, M is even
      } else {
        if (nums1[0] < nums2[mid2]){
          return nums2[mid2];
        } else if (nums1[0] >= nums2[mid2] && nums1[0] <= nums2[mid]){
          return nums1[0];
        } else {
          return nums2[mid];
        }
      }

    } else if (nums1.length === 2){
      // base case 4: N = 2, M = 2
      if (nums2.length === 2){
        let sortedArray = nums1.concat(nums2).sort((a,b) => a-b);
        console.log("array", sortedArray);
        return evenMedian(sortedArray[1], sortedArray[2]);
      // base case 5: N = 2, M is odd 
      } else if (nums2.length % 2 === 1){
        let array = [nums2[mid]];
        array.push(Math.max(nums1[0], nums2[mid - 1]));
        array.push(Math.min(nums1[1], nums2[mid + 1]
        ));
        console.log("bc5", array);
        return array.sort((a,b) => a-b)[1];
      // base case 6: N = 2, M is even
      } else {
        let array = [nums2[mid], nums2[mid2]];
        array.push(Math.max(nums1[0], nums2[mid2 - 1]));
        array.push(Math.min(nums1[1], nums2[mid + 1]));
        array = array.sort((a,b) => a-b);
        return evenMedian(array[1], array[2]);
      }
    }

    // recursion
    let nums1Mid = Math.floor((nums1.length)/2);
    console.log ("nums1Mid", nums1Mid);
    console.log("nums2Mid", mid);
    let newNums1,
        newNums2;
    if (nums1[nums1Mid] > nums2[mid]){
      newNums1 = nums1.slice(0, nums1Mid+1);
      newNums2 = nums2.slice(nums1.length - nums1Mid - 1);
    } else {
      if (nums1.length % 2 === 0){
      newNums1 = nums1.slice(nums1Mid - 1);
      newNums2 = nums2.slice(0, nums2.length - nums1Mid + 1); 
      } else {
      newNums1 = nums1.slice(nums1Mid);
      newNums2 = nums2.slice(0, nums2.length - nums1Mid); 
      }

    }
    return findMedianSortedArrays(newNums1, newNums2);
};

let a = [1, 2, 3, 4, 10];
let b = [5, 6, 7, 8, 9];
findMedianSortedArrays(a, b);

a = [10];
b = [5, 6, 4];
let c = a.concat(b).sort((a,b) => a-b)
console.log(c);
