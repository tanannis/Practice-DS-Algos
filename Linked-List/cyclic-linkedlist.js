/* Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true

Input: head = [1,2], pos = 0
Output: true

Input: head = [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]
post = -1
Output = false
*/

// traverse linked list
// use a hash set to store every visited node
// if node is already in visited, means there's a cycle
// **** Must use Set i/o regular {} for memoizing linked list nodes or won't work
const hasCycle = (head) => {
    if (!head) return false;

    const visited = new Set();
    let node = head;

    while (node) {
      if (visited.has(node)) return true;
      visited.add(node);
      node = node.next;
    }
    return false;
};


// Use fast and slow pointers
// no matter how much Fast is faster than Slow, eventually will still meet at some point if there's a cycle
const hasCycle2 = (head) => {
  if (!head) return false;

  let slow = head;
  let fast = head.next;
  
  while (slow !== fast) {
    // if fast reaches a null node, means it's the end of the linked list, means no cycle
      if (!fast || !fast.next) return false;

      fast = fast.next.next;
      slow = slow.next;
  }
  
  return true;
};
