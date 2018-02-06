// COMPLETED

// Longest Substring Without Repeating

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
     let result = 0;
     let tempCount = 0;
     let substring = {};
     let i = 0;
     let prevIdx = 0;
     let resultStart = 0;

     while (i < s.length) {

         if (substring.hasOwnProperty(s[i]) && substring[s[i]] >= resultStart) {
             prevIdx = substring[s[i]];
             substring[s[i]] = i;
             tempCount = i - prevIdx;
             resultStart = prevIdx + 1;
         } else {
             substring[s[i]] = i;
             tempCount += 1;
             if ( tempCount > result ){
                 result = tempCount;
             }
         }

         i += 1;
     }

     return result;
 };
