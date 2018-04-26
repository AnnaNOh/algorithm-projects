// COMPLETED

var permute = function(nums) {
  if (nums.length === 1) {
    return [nums];
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let currentEl = [nums[i]];
    let remainder = nums.slice(0, i).concat(nums.slice(i + 1));

    let perms = permute(remainder);
    for (let j = 0; j < perms.length; j++) {
      result.push(currentEl.concat(perms[j]));
    }
  }

  return result;
};

// My code to create permutations
// var permutations = function(array) {
//   if (array.length === 1) {
//     return [array];
//   }
//
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let currentEl = [array[i]];
//     let remainder = array.slice(0, i).concat(array.slice(i + 1));
//
//     let perms = permutations(remainder);
//     for (let j = 0; j < perms.length; j++) {
//       result.push(currentEl.concat(perms[j]));
//     }
//   }
//
//   return result;
// };
//
// let a = [1, 2, 3, 4];
// permutations(a);

// a = [1, 2, 3, 4];
// console.log( a.slice(1) );
// console.log( a.slice(0, 1) );
// console.log( a.slice(1).concat( a.slice(0,1) ) );

// all permutations with no repeats
// var Util = function() {
// };
//
// Util.getPermuts = function(array, start, output) {
// 	if (start >= array.length) {
// 		var arr = array.slice(0); //clone the array
// 		output.push(arr);
// 	} else {
// 		var i;
//
// 		for (i = start; i < array.length; ++i) {
// 			Util.swap(array, start, i);
// 			Util.getPermuts(array, start + 1, output);
// 			Util.swap(array, start, i);
// 		}
// 	}
// }
//
// Util.getAllPossiblePermuts = function(array, output) {
// 	Util.getPermuts(array, 0, output);
// }
//
// Util.swap = function(array, from, to) {
// 	var tmp = array[from];
// 	array[from] = array[to];
// 	array[to] = tmp;
// }
//
// // Test API ...
// var array = ['R', 'G', 'B'];
// var output = [];
//
// Util.getAllPossiblePermuts(array, output);
// console.log(output);

// all permutations with repetition
// var Util = function() {
// };
//
// Util.getRPermuts = function(array, size, initialStuff, output) {
// 	if (initialStuff.length >= size) {
// 		output.push(initialStuff);
// 	} else {
// 		var i;
//
// 		for (i = 0; i < array.length; ++i) {
// 			Util.getRPermuts(array, size, initialStuff.concat(array[i]), output);
// 		}
// 	}
// }
//
// Util.getAllPossibleRPermuts = function(array, size, output) {
// 	Util.getRPermuts(array, size, [], output);
// }
