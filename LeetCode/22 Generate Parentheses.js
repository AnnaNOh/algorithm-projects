// COMPLETED

var generateParenthesis = function(n) {
  let result = [''];

  while (result[0].length !== 2 * n) {
    let tempResult = [];
    let i = 0;

    while (i < result.length) {
      if (valid(result[i], '(', n)) {
        tempResult.push(result[i] + '(');
      }
      if (valid(result[i], ')', n)) {
        tempResult.push(result[i] + ')');
      }
      i += 1;
    }

    result = tempResult;
  }
};

var valid = function(testString, parentheses, n) {
  let left = 0;
  let right = 0;

  // count left and right parentheses
  for (let i = 0; i < testString.length; i++) {
    if (testString[i] === '(') {
      left += 1;
    }
    if (testString[i] === ')') {
      right += 1;
    }
  }

  // determine valid using count
  if (parentheses === '(') {
    if (left < n && left >= right) {
      return true;
    } else {
      return false;
    }
  } else {
    if (right < n && right < left) {
      return true;
    } else {
      return false;
    }
  }
};

generateParenthesis(3);
