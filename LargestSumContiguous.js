const largestSum = (arr) => {
  let largest = arr[0];
  let currSum = arr[0];
  let currVal;
  let largestStartIdx = 0;
  let largestEndIdx = 0;
  let currStartIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    currVal = arr[i];
    currSum = currSum + currVal;

    // reset currSum
    if (currSum < currVal) {
      currSum = currVal;
      currStartIdx = i;
    }

    if (currSum > largest) {
      largest = currSum;
      largestStartIdx = currStartIdx;
      largestEndIdx = i;
    }
  }

  // return largest sum
  return [largest, largestStartIdx, largestEndIdx];
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(largestSum(a));
