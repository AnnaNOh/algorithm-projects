// COMPLETED
// Not LeetCode but something done on the side for recursion practice

const fibArray = function(n) {
  const arr = [1,1];
  if (n === 1){
    return arr[0];
  }

  if (n === 2){
    return arr.slice(0,2);
  }

  let prevArr = fibArray(n - 1);
  let newValue = prevArr[prevArr.length - 1] + prevArr[prevArr.length - 2];


  return prevArr.concat(newValue);

};

fibArray(12);
