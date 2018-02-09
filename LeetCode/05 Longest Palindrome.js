// Still Working

// Longest Palindromic substring
//
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//
// Example:
// Input: "cbbd"
// Output: "bb"


// having trouble with inconsistent output


var longestPalindrome = function(s) {
  let result = s[0];
  let i1 = 0;
  let i2 = 0;
  let tempStringStart = 0;
  let tempStringEnd = 0;

  while (i1 < s.length ) {

    tempStringStart = i1;
    i2 = 1;

    if (s[i1] === s[i1+1]) {
        tempStringEnd = i1+1;
        if (result.length < s.slice(tempStringStart, tempStringEnd+1).length){
            result = s.slice(tempStringStart, tempStringEnd+1);
            console.log("adding one " + result);
        }
     }

    while (i1-i2 >= 0 && i1 + i2 < s.length){




      if (s.slice(tempStringStart-1, tempStringEnd+2) === s.slice(tempStringStart-1, tempStringEnd+2).split("").reverse().join("")){
        tempStringEnd += 1;
        tempStringStart = tempStringStart-1;

        if (result.length < s.slice(tempStringStart, tempStringEnd+1).length){
          result = s.slice(tempStringStart, tempStringEnd+1);
        }
      }

      i2 += 1;
    }
    if (s.slice(tempStringStart, tempStringEnd + 1).length > result.length){
      result = s.slice(tempStringStart, tempStringEnd+1);
    }
    i1 += 1;
  }
  return result;
};

let a = "aba";
let b = "bb";
let c = "dbbbd";
console.log(longestPalindrome(a));
console.log(longestPalindrome(b));
console.log(longestPalindrome(c));
