/* Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1] Output: true
1 -> 2 -> 2 -> 1

Input: head = [1,2,1] Output: true
1 -> 2 -> 1

Input: head = [1,2] Output: false
1 -> 2 

Input: head = [1] Output: true
*/

// traverse linked list and push each val to an array, then loop array using 2 pointers
// time: O(2n) = O(n), space: O(n)
const isPalindrome = (head) => {
  if (head && !head.next) return true;
  const array = [];
  
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  
  let p1 = 0;
  let p2 = array.length - 1;
  while (p1 < p2) {
    if (array[p1] !== array[p2]) return false;
    p1++;
    p2--;
  }   
  
  return true;
};


// little bit faster than above because only O(1n), but space is also O(n)
const isPalindrome2 = function(head) {
  let forward = '';
  let backward = '';

  while (head) {
      forward += head.val;
      backward = head.val + backward;
      head = head.next;
  };
  
  return forward === backward;
};
