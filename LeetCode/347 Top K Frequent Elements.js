// COMPLETED

var topKFrequent = function(nums, k) {
  let bucket = [];
  let hash = {};
  let prevBucketLoc = 0;
  let result = [];

  // make hash
  for (var i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      hash[nums[i]] += 1;
      // add to new bucket
      if (bucket[hash[nums[i]]] === undefined) {
        bucket[hash[nums[i]]] = [nums[i]];
      } else {
        bucket[hash[nums[i]]].push(nums[i]);
      }
      // remove from prev Bucket
      prevBucketLoc = bucket[hash[nums[i]] - 1].indexOf(nums[i]);
      bucket[hash[nums[i]] - 1].splice(prevBucketLoc, 1);
    } else {
      hash[nums[i]] = 0;

      // add to new bucket
      if (bucket[hash[nums[i]]] === undefined) {
        bucket[hash[nums[i]]] = [nums[i]];
      } else {
        bucket[hash[nums[i]]].push(nums[i]);
      }
    }
  }

  i = bucket.length;
  while (result.length < k) {
    if (bucket[i] !== undefined) {
      result = result.concat(bucket[i]);
    }

    i -= 1;
  }
  // console.log(bucket);
  return result.splice(0, k + 1);
};
