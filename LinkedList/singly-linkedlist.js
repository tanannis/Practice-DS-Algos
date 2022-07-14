// first, create a node class for a single node
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

/* then create singly linked list class
    1. Whenever new val is added, we need to create a new node
    2. If node's head is null, means this node is the 1st node in the linked list. Set the head and tail to the new node.
    3. Otherwise, add new node to the current tail, then declear new node as the new tail.
    4. Increment overall length of the linked list to keep track of how many nodes are there.
*/
class SinglyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (val) {
    let node = new Node(val);
    //  If it's the 1st node in the linked list, set the head and tail to the new node.
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // add new node to the current tail, then declear new node as the tail
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.head;
      let newTail = null;
      while (node.next) {
        newTail = node;
        node = node.next;
      }
      this.tail = newTail;
      this.tail.next = null;
    }
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.head;
      this.head = node.next;
    }
    this.length--;
    return this;
  }

  unshift (val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();

list.push("Hello")
list.push("World")
list.push("!")
list.push("99")
list.pop();
list.pop();
list.pop();
list.pop();
list.push("000");
list.push("111");
list.push("222");
list.push("333");
list.shift();
list.shift();
list.shift();
list.shift();
list.unshift("OK");
list.unshift("alright");
list.unshift("Kobe");

console.log(list)
 


