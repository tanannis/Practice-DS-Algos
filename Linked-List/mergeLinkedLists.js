/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [1,2,4], list2 = [1,3,4,5,6]
Output: [1,1,2,3,4,4,5,6]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
*/

class ListNode {
  constructor (val) {
    this.val = (val === undefined ? 0 : val)
    this.next = null;
  }
}

/* Return new list:

  Make a new empty linked list to store merged result 
  While there are nodes in both lists
    traverse and compare each current value just like how we do it with arrays
    add the smaller node to new head
  In the end if one of the lists still have unchecked nodes, add them all to the end of new head
  Return new head's next, because the 1st ele is empty
*/ 
const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null;
  if (!list1 && list2) return list2;
  if (list1 && !list2) return list1;

  let head = new ListNode();
  let tail = head;
  
  while (list1 && list2) {
      if (list1.val <= list2.val) {
          tail.next = new ListNode(list1.val);
          list1 = list1.next;
      } else {
          tail.next = new ListNode(list2.val);
          list2 = list2.next;
      }
      tail = tail.next;
  }
  
  // in case one of the list is shorter than the other
  if (list1) tail.next = list1;
  if (list2) tail.next = list2;
  
  // console.log("head", head) // [0,1,1,2,3,4,4]
  // console.log("tail", tail) // [4,4]
  
  return head.next; 
}


/* Merge in-place

*/
const mergeTwoLists2 = (list1, list2) => {
    if (!list1 && !list2) return null;
    if (!list1 && list2) return list2;
    if (list1 && !list2) return list1;
    
    let current1 = list1;
    let current2 = list2;
    let prev = null;
 
    while(current1 && current2) {
        if (current1.val <= current2.val) {
            prev = current1;
            current1 = current1.next
        } else {
            // this happens when list1's 1st val > list2's 1st val
            if (prev) prev.next = current2; 
            
            prev = current2;
            current2 = current2.next
            prev.next = current1;
        }
    }
    
    if (!current1 && current2) prev.next = current2;
    if (!current2 && current1) prev.next = current1;
    
    return list1.val <= list2.val ? list1 : list2;
}