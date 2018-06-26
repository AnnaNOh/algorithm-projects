
const reverseStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }
  return result;
}

let a = "hello";
reverseStr(a);

