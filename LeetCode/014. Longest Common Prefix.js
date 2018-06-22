// Completed

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function(strs) {
  let ostr, j, temp;
  let res = strs[0];
  
  if (strs.length === 0) return "";

  for (let i = 0; i < strs.length; i++){
    ostr = strs[i];
    if (res.length < ostr.length){
      temp = res;
      res = ostr;
      ostr = temp;
    }
    j = 0;
    while (j < ostr.length && res[j] === ostr[j]){
      j++;
    }
    res = ostr.substring(0, j);
  }
  return res;
};

let a = ["dog","racecar","car"];
longestCommonPrefix(a);
