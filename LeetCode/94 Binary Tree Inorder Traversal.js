// idx    children
// 0      1, 2
// 1      3, 4
// 2      5, 6
// 3,     7, 8 


function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

var inorderTraversal = function(array){
  let root = TreeNode(array[0]);
  let shiftBy = 0;
  let currentNode;
  root.left = TreeNode(array[2 * i + 1]);
  root.right = TreeNode(array[2 * i + 2]);
  if (!currentNode.left.val) shiftBy = shiftBy + 2; 
  if (!currentNode.right.val) shiftBy = shiftBy + 2;


  for (let i = 1; i < array.length; i++){
    currentNode = TreeNode(array[i]);
    currentNode.left = TreeNode(array[2 * i + 1 - shiftBy]);
    currentNode.right = TreeNode(array[2 * i + 2 - shiftBy]);

    if (!currentNode.left.val) shiftBy = shiftBy + 2; 
    if (!currentNode.right.val) shiftBy = shiftBy + 2;
  }

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

var inorderTraversal = function(root){
  let result = [];
  let displacement 

  return result;
}
