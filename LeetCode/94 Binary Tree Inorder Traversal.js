// idx children
// 0   1, 2
// 1   3, 4
// 2   5, 6
// 3,  7, 8 
// [1,2,3,4,5]

function TreeNode(val){
  if (val === null) return null;
  this.val = val;
  this.left = this.right = null;
}

var inorderTraversal = function(array){
  let root = TreeNode(array[0]);
  let shiftBy = 0;
  let currentNode;
  if (array[1] !== null) root.left = TreeNode(array[1]);
  if (array[2] !== null) root.right = TreeNode(array[2]);

  for (let i = 1; i < array.length; i++){
    if (array[i] === null){
      shiftBy += 2;
    } else {
    currentNode = TreeNode(array[i]);
    currentNode.left = TreeNode(array[2 * i + 1 - shiftBy]);
    currentNode.right = TreeNode(array[2 * i + 2 - shiftBy]);
    }
  }

  console.log(root);
  inorderTraversalIterative(root);
};


var inorderTraversalIterative = function(root){
  let currentNode = root;
  let stack = [];
  let result = [];

  while (currentNode.left){
    stack.push(currentNode);
    currentNode = currentNode.left;
  }
  while (stack.length !== 0){
    result.push(stack[stack.length - 1].val);
    stack.pop();

    currentNode = currentNode.right
    while (currentNode.left){
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
  }
  
  return result;
};


let a = [1,null,2,3];
console.log(inorderTraversal(a));

