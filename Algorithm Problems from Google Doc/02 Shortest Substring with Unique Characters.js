// shortest substring with unqiue characters

let shortestUniqueSubstring = function(array, string) {
  let uniqHash = {};

  // make a Hash of the unique characters
  for (let i = 0; i < array.length; i++) {
    uniqHash[array[i]] = [];
  }

  // insert positions of characters into hash
  for (let i = 0; i < string.length; i++) {
    if (uniqHash[string[i]] !== undefined) {
      uniqHash[string[i]].push(i);
    }
  }

  // make pointers
  let startPointer = 0;
  let endPointer = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (uniqHash[string[i]].length !== 1) {
      uniqHash[string[i]].shift;
    } else {
      startPointer = i;
      break;
    }
  }
  for (let i = string.length - 1; i > -1; i -= 1) {
    if (uniqHash[string[i]].length !== 1) {
      uniqHash[string[i]].shift;
    } else {
      endPointer = i;
      break;
    }
  }

  return string.slice(startPointer, endPointer);
};

let a = ['a', 'b', 'g'];
let b = 'babageee';
console.log(a);
shortestUniqueSubstring(a, b);
