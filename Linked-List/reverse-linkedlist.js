/* Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]   1 -> 2 -> 3 -> 4 -> 5
Output: [5,4,3,2,1]   5 -> 4 -> 3 -> 2 -> 1

Input: head = []    Output: []
*/

// reverse in place with 3 pointers
const reverseList = (head) => {
  // first, make 3 pointers
  let current = head;
  let prev = null;
  let next = null;
  
  while(current) {
      // then, place pointer to next value so connection doesn't get lost as we flip the arrow
      next = current.next;
      
      // flip the arrow direction
      current.next = prev;
      
      // re-assign and move pointers forward
      prev = current;
      current = next;
  }
  // new head == the last node
  return prev;
};
