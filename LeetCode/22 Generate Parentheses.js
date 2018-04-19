var generateParenthesis = function(n) {
  let left = 0;
  let right = 0;
  let string = '';
  return [...new Set(recurseParenthesis(n, string, left, right))];
};

var recurseParenthesis = function(n, string, left, right) {
  let result = [];

  if (left === n && right === n) {
    return string;
  }

  if (left < n) {
    string += '(';
    left += 1;
    // console.log(string);
    result = result.concat(recurseParenthesis(n, string, left, right));
    if (right < n && right < left) {
      string += ')';
      right += 1;
      // console.log(string);
      result = result.concat(recurseParenthesis(n, string, left, right));
    }
  }
  if (right < n && right < left) {
    string += ')';
    right += 1;
    // console.log(string);
    result = result.concat(recurseParenthesis(n, string, left, right));
  }

  return result;
};

generateParenthesis(4);

// ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
