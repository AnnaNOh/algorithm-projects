// Completed

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


var AddTwoNums = function(num1, num2) {
  let carryOver = 0;
  let numIdx = 0;
  let sum = "";
  while (numIdx < num1.length || numIdx < num2.length ){
    if (num1[numIdx] === undefined){
      sum += String(num2[numIdx] + carryOver);
      carryOver = 0;
    } else if (num2[numIdx] === undefined) {
      sum += String(num1[numIdx] + carryOver);
      carryOver = 0;
    }
    else {
      sum += String( (num1[numIdx] + num2[numIdx] + carryOver) % 10 )
      if (num1[numIdx] + num2[numIdx] > 9){
        carryOver = 1;
      } else {
        carryOver = 0;
      }
    }
    numIdx += 1;    
  }

  return sum;
};



Another version:
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = [];
    let sum = 0;
    let carryOver = 0;
    
    while (l1 || l2){
        if (!l1){
          l1 = {};
          l1.val = 0 
          l1.next = null  
        } 
        if (!l2){
          l2 = {};
          l2.val = 0 
          l2.next = null  
        }
        
        sum = l1.val + l2.val + carryOver;
        if (sum > 9){
            carryOver = 1;
            sum = sum - 10;
        } else {
            carryOver = 0;
        }
        
        result.push (sum);
        l1 = l1.next;
        l2 =  l2.next;
    }
    
    if (carryOver > 0){
        result.push(1);
    }
    return result;
};

