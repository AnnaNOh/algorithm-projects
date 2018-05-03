// COMPLETE

// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given binary tree [3,9,20,null,null,15,7],
//
// 3
// / \
// 9  20
// /  \
// 15   7
// return its depth = 3.

var maxDepth = function(root) {
  if (root) {
    let left = 1 + maxDepth(root.left);
    let right = 1 + maxDepth(root.right);
    return Math.max(left, right);
  } else {
    return 0;
  }
};

// 1 line solution of the same thing
// return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;

// if the input was an array like I first thought
// var maxDepth = function(root) {
//   let result = 0;
//   while (Math.pow(2, result) < root.length){
//     result += 1;
//   }
//   return result;
// };
//
// let a = [3,9,20,null,null,15,7];
// console.log(maxDepth(a));
