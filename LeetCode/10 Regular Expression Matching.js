// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
//
// The matching should cover the entire input string (not partial).
//
// The function prototype should be:
// bool isMatch(const char *s, const char *p)
//
// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true
//
Approach
So the first input (s) must be of longer or equal length of p unless there is a *

* can be multiple letters or zero
. can only be any 1 letter

check p for first letter of s or *
  if it is *, check p 1 space before where * is 
if the next letter for p is the next letter of s or * 

  
