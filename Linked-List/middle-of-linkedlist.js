/* Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]   Output: [3,4,5]
1 -> 2 -> 3 -> 4 -> 5
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]   Output: [4,5,6]
1 -> 2 -> 3 -> 4 -> 5 -> 6
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

/* In order to know the length of the linked list, we need to traverse from start to end, to do this, we push each node to an array and return the middle indexed note. */
const middleNode = (head) => {
  let node = head;
  const res = [node];
  
  while (node && node.next) {
     node = node.next;
     res.push(node);
  } 

  const middle = Math.floor(res.length / 2); 
  return res[middle];
};


// using 2 pointers, fast & slow
const middleNode3 = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  } 
  return slow;
};


// using a stack
const middleNode2 = (head) => {
  const res = [head];
  const stack = [head];

  while (stack.length) {
      const node = stack.pop();
      if (node.next) {
          res.push(node.next);
          stack.push(node.next);
      }
  } 
  const middle = Math.floor(res.length / 2); 
  return res[middle];
};


