// INCOMPLETE

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
  maxDepthRecursive(root);
};

var maxDepthRecursive = function(node, depth) {
  if (root.val !== null && (root.left || root.right)) {
    return depth;
  }

  depth += 1;
  let leftChild = node.left;
  let rightChild = node.right;

  if (leftChild.val !== null) {
    let leftChildDepth = maxDepthRecursive(leftChild, depth);
  }
  if (rightChild.val !== null) {
    let rightChildDepth = maxDepthRecursive(rightChild, depth);
  }

  if (leftChildDepth > rightChildDepth) {
    return leftChildDepth;
  } else {
    return rightChildDepth;
  }
};
