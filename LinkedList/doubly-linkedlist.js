// first, create a node class for a single node
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/* Some use case can be history of website, next page and go back to prev page...etc */
class DoublyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // time = O(1)
  push (val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // time = O(1)
  pop () {
    if (!this.head) return undefined;

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  // time = O(1)
  shift () {
    if (!this.head) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // time = O(1)
  unshift (val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // we should take advantage of the pointers and iterate depends on how close the index is to the begining or to the end of the list. time = O(n/2) = O(n), because we only look at half of the linked list, so it's little faster than singly linked list
  get (index) {
    if (index < 0 || index >= this.length) return null;

    let node;
    let i;
    // when index is closer to the begining
    if (index <= Math.abs(this.length / 2)) {
      i = 0;   
      node = this.head;
      while (i !== index) {
        node = node.next;
        i++;
      }
    } else {  // when index is closer to the end
      i = this.length - 1;
      node = this.tail;
      while (i !== index) {
        node = node.prev;
        i--;
      }
    }
    return node;
  }

  set (value, index) {
    let node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }
  
  // time = O(1)
  insert (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    
    let newNode = new Node(val);
    let node = this.get(index - 1);
    let nextNode = node.next;

    newNode.next = nextNode;
    nextNode.prev = newNode;
    newNode.prev = node;
    node.next = newNode;
    
    this.length++;
    return true;
  }

  // time = O(1)
  remove (index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();

    let prevNode = this.get(index - 1);
    let nodeToBeRemoved = prevNode.next;
    let nextNode = nodeToBeRemoved.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToBeRemoved.prev = null;
    nodeToBeRemoved.next = null;

    this.length--;
    return nodeToBeRemoved;
  }

  print () {
    const arr = [];;
    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
  }
  
  
}

let DlinkedList = new DoublyLinkedList();
DlinkedList.push("Hello");
DlinkedList.push("World");
DlinkedList.push("!");
// DlinkedList.pop();
// DlinkedList.shift();
DlinkedList.insert(2, "123")
DlinkedList.remove(2);
DlinkedList.print();


console.log(DlinkedList);