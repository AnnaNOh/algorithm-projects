// Completed

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


var longestPalindrome = function(s) {
  let i = 0;
  let l, r, el, er, curr;
  let res = s[i];
  let sym = true;

  // odd length palindrome
  for (i = 0; i < s.length; i++){
    sym = true;
    l = i;
    r = i;

    while (sym && l > 0 && r <= s.length){
      if (s[l-1] === s[r+1]){
        l = l - 1;
        r++;
      } else {
        sym = false;
      }
    }
    curr = s.substring(l, r+1);
    if (curr.length > res.length) res = curr;
  }

  // even length palindrome
  for (i = 0; i < s.length; i++){
    if (s[i] === s[i+1]){
      sym = true;
      l = i; 
      r = i+1;

      while (sym && l > 0 && r <= s.length){
        if (s[l-1] === s[r+1]){
          l = l - 1;
          r++;
        } else {
          sym = false;
        }
      }
      curr = s.substring(l, r+1);
      if (curr.length > res.length) res = curr;
    };
  }  

  return res;
};

let a = "cbbd";
longestPalindrome(a);
