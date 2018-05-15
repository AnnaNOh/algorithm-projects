// COMPLETED

// Longest Unique Path of a Binary Tree

class Node {
  constructor(value) {
    this.x = value;
    this.l = null;
    this.r = null;
  }
}

let solution = function(T){
  let hash = {};
  let counter = 0;
  let path = [];
  return recursiveSolution(T, hash, counter, T, path);
}

let recursiveSolution = function(node, hash, counter, root, path){

  // return if no more children
  if (!node){
    path.forEach(function(element){
      delete hash[element];
    })
    hash[root.x] = true;
    return counter;
  }

  // return if not distinct
  if (hash.hasOwnProperty(node.x)){
    path.forEach(function(element){
      delete hash[element];
    })
    hash[root.x] = true;
    return counter;
  }

  hash[node.x] = true;
  counter++;
  path.push(node.x);

  let left = recursiveSolution(node.l, hash, counter, root, path);
  let right = recursiveSolution(node.r, hash, counter, root, path);  

  return Math.max(left, right);
}





let T = new Node(1);
T.l = new Node(5);
T.l.l = new Node(1);
T.r = new Node(5);
T.r.l = new Node(6);


console.log(solution(T))




