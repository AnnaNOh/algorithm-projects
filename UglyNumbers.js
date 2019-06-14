// https://www.geeksforgeeks.org/ugly-numbers/

const uglyNumbers = (n) => {
  let resultHash = {
    2: 0,
    3: 0, 
    5: 0,
  };

  let resultArray = [1];

  while (resultArray.length < n){
    let idx2 = resultHash[2];
    let val2 = resultArray[idx2] * 2;
    let idx3 = resultHash[3];
    let val3 = resultArray[idx3] * 3;
    let idx5 = resultHash[5];
    let val5 = resultArray[idx5] * 5;

    let currentSmallest = Math.min(val2, val3, val5);

    // iterate if the same 
    if (currentSmallest === val2){
      resultHash[2] = idx2 + 1;
    }
    if (currentSmallest === val3){
      resultHash[3] = idx3 + 1;
    }
    if (currentSmallest === val5){
      resultHash[5] = idx5 + 1;
    }

    resultArray.push(currentSmallest);
  }

  return resultArray[n-1];
} 


let a = 7;
console.log(uglyNumbers(a));

let b = 10;
console.log(uglyNumbers(b));

let c = 15;
console.log(uglyNumbers(c));

let d = 150;
console.log(uglyNumbers(d));
