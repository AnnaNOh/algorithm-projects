let repeats = function(array){
  if (array.length <= 0) return "";

  let hash = {};
  for (let i = 0; i < array.length; i++){
    if (hash[array[i]]){
      hash[array[i]]++;
    } else {
      hash[array[i]] = 1;
    }
  }

  let keys = Object.keys(hash).sort();
  let result = "";
  for (let j = 0; j < keys.length; j++){
    if (hash[keys[j]] >= 2){
      result = result + " " + String(keys[j]);
    }
  }
  return result.trim();
}

let repeats2 = function(array){
  if (array.length <= 0) return "";
  let result = "";

  array = array.sort();
  let prev, current, lastAdded;
  for (let i = 0; i < array.length; i++){
    prev = current;
    current = array[i];
    if (prev === current && prev != lastAdded){
      lastAdded = prev;
      result = result + " " + String(prev);
    }    
  }
  console.log(result);
  console.log(result.slice(1));
  return result.trim();
}

let a = [1, 7, 5, 7, 9, 2, 1, 9, 5, 9];
console.log(repeats(a));
console.log(repeats2(a));



function solution(arr) {
    if (arr.length <= 0) return "";
    let hash = {};
    
    for (let i = 0; i < arr.length; i++){
        if (hash[arr[i]]){
            hash[arr[i]]++;
        } else {
            hash[arr[i]] = 1;
        }
    }
    
    let keys = Object.keys(hash).sort();
    let result = "";
    for (let j = 0; j < keys.length; j++){
        if (hash[keys[j]] >= 2){
            result = result + " " + String(keys[j]);
        }
    }
    console.log(result.trim());
    return result.slice(1);
}
