// incomplete 

class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
    this.prev = null;
  }
}

const TernaryToBT = (str) => {
  const root = new Node(str[0]);
  let currNode = root;

  for (let i = 1; i < str.length - 1; i++) {
    let currStr = str[i];
    let nextStr = str[i+1];

    let str3 = str[i+2];
    let str4 = str[i+3];

    if (currStr === '?'){
      // create left 
      if (nextStr !== '?' && nextStr !== ':'){
        newNode = TernaryToBT(str.splice(i+1));
        currNode.left = newNode;
        newNode.prev = currNode;
        i++;

        // create right
        if (str3 === ':') {
          if (str4 && str4 !== '?' && str4 !== ':'){
            let rightNode = new Node(str4);
            currNode.right = rightNode;
            rightNode.prev = currNode;
            i = i + 2;
          }
        }
      }
    }

    if (currStr === ':') {
      if (nextStr !== '?' && nextStr !== ':'){
        newNode = TernaryToBT(str.splice(i+1));
        currNode.right = newNode;
        return currNode;
      }
    }
  }

  return root;
}
