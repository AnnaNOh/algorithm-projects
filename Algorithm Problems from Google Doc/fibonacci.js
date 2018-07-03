let fibonacci = function(n){
  if (n <= 0) return [];
  if (n === 1) return [1];

  let result = [1, 1];
  let prev, prev2;
  while (result.length < n){
    prev = result[result.length - 1];
    prev2 = result[result.length -2];
    result.push(prev + prev2);
  }
  return result;
}

let a = 7;
console.log(fibonacci(a));

let fibonacci2 = function(n){
  if (n === 0) return [];
  if (n === 1) return [0];

  let result = [0, 1];
  let prev, prev2;
  while (result.length < n){
    prev = result[result.length - 1];
    prev2 = result[result.length -2];
    result.push(prev + prev2);
  }
  return result;
}

let b = 4;
console.log(fibonacci2(b));



let fibonacci3 = function(n){
  if (n <= 0) return null;
  if (n === 1) return 1;

  let result = 1;
  let i = 2;
  let prev = result;
  let prev2 = 1;
  while (i < n){
    prev2 = prev;
    prev = result;
    result = prev + prev2;
    i++;
  }
  
  return result;
}

let c = 7;
console.log(fibonacci3(c));
