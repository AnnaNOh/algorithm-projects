// COMPLETED

// Zig Zag Conversion
//
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

// my approach
// how about take take 0, 4, 8, 12, etc first until it hits the end of the string length
// then take 1, 3, 5, 7, (so the odds)
// then take 2, 6, 10, etc

// the pattern:
// 1st row     2(r-1)* i    where r = numRows
// 2nd row     2(r-1) * i +- 1
// ...
// rth row     2(r-1) * i +- (r-1)

var convert  = function(s, numRows) {
  let result = "";
  let rowIdx = 0;
  let stringIdx = 0;

  // exception for when numRows === 1
  if (numRows === 1) {
    return s;
  }

  while (rowIdx < numRows) {
    stringIdx = 0;

    if (s[stringIdx + rowIdx] !== undefined) {
      result += s[stringIdx + rowIdx];
    }
    while (stringIdx < s.length){
      stringIdx += 2*(numRows-1);
      if (s[stringIdx - rowIdx] !== undefined && rowIdx !== numRows-1) {
        result += s[stringIdx - rowIdx];
      }
      if (s[stringIdx + rowIdx] !== undefined && rowIdx !== 0) {
        result += s[stringIdx + rowIdx];
      }
    }
    rowIdx += 1;
  }
  return result;
};
