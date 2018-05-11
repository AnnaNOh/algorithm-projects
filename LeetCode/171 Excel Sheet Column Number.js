// COMPLETED

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//    A -> 1
//    B -> 2
//    C -> 3
//    ...
//    Z -> 26
//    AA -> 27
//    AB -> 28 
//    ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701


var titleToNumber = function(s) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hash = {};
  for (let i = 0; i < alphabet.length; i++){
    hash[alphabet[i]] = i + 1;
  }

  let result = 0;
  for (i = s.length - 1; i >= 0; i = i - 1){
    result += hash[s[i]] * Math.pow(26, s.length - 1 - i);
    console.log(result);
  }
  return result;
};

let a = "J";
let b = "JI";
let c = "ZY"
// titleToNumber(a);
// titleToNumber(b);
titleToNumber(c);
