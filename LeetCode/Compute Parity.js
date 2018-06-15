Compute parity
Given an integer compute its parity (number of set bits). for negative numbers the MSB will be set, take that into account while counting set bits.
Example
parity(3)  #=> 2
parity(7)  #=> 3
parity(-7) #=> 4
Solution
Loop through all the bits and count the set bits
Trick to improve time complexity is to skip over all the 0-bits by using num = num & (num -1) to delete the lowest set bit from the number



let parity = function(a){
  if (a === 0) {
    return 0;
  }

  let counter = 1;
  let comparitor = 1;

  if (a < 0){
    a = -1 * a;
    counter++;
  }

  while (comparitor <= a) {
    comparitor = comparitor * 2;
    counter++;
  }

  return counter-1;
};

let a  = 1;
parity(a)
