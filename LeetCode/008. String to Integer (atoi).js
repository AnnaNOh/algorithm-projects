// Completed

var myAtoi = function(str) {
    str = str.trim();
    let i = 0;
    // console.log("start ", i);
    let start = i;
    if (str[0] === "+" || str[0] === "-"){
      i++;
    } else if (!isNaN(Number(str[0]))){
    
    } else {
      return 0;
    }

    while (
      i < str.length && 
      str[i] !== " " && 
      !isNaN( Number(str[i]) ) ){
        i++;    
    }
    let end = i;
    // console.log("end ", end);
    // console.log("substring ", str.substr(start, end))

    let result = Number(str.substr(start, end));
    // console.log("result ", result);
    
    if ( isNaN(result) ){
        return 0;
    }
    if (result < 0 && result < -1 * Math.pow(2, 31)){
        return -1 * Math.pow(2, 31);
    } 
    if (result >= Math.pow(2, 31)){
        return Math.pow(2, 31) - 1;
    }
    return result;
    
};

let a  = "-4232- 43";
myAtoi(a);



