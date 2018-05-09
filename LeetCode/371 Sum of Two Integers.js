// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example:
// Given a = 1 and b = 2, return 3.

// Credits:
// Special thanks to @fujiaozhu for adding this problem and creating all test cases.


var getSum = function(a, b) {
  let result = "";
  let carry;
  let counter = 0;
  
  if (a < b){
    let temp = a;
    a = b;
    b = temp;
  }
  a = a.toString(2);
  b = b.toString(2);
  while (a.length !== b.length){
    b = "0".concat(b);
  }

  for (let i = a.length - 1; i >= 0; i = i - 1){
    if (a[i] === "1"){
      counter += 1;
    }
    if (b[i] === "1"){
      counter += 1;
    }
    if (carry === 1){
      counter += 1;
    }

    if (counter === 3){
      carry = 1;
      result = "1" + result; 
    } else if (counter === 2){
      carry = 1; 
      result = "0" + result;
    } else if (counter === 1) {
      carry = 0;
      result = "1" + result;
    } else {
      carry = 0;
      result = "0" + result;
    }
    counter = 0;
  }
  
  if (carry === 1){
    result = "1" + result;
  }  
  
  result = parseInt(result, 2);
  return result;  
};


let x = 10;
let y = 5;
console.log(getSum(x,y));


console.log(x.toString(2));
console.log(y.toString(2));

x  = x ^ y;
y = x & y;
console.log(x.toString(2));
console.log(y.toString(2));

y = y << 1
console.log(y.toString(2));
