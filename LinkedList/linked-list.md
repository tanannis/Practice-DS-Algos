# Linked Lists

## Use Cases

### Fist In First Out Queue
- linked lists provide O(1) operation time when removing from front and back of list
- Also provides best O(1) time for insertion

### Memeory Allocation
- Game Development: it's somewhat common practice to have an intrusive singly- or doubly-linked "render" list: As Renderables come into and out of existence they can register themselves with this list -- without causing any memory allocation. If their render depth or priority is changed they can remove and reinsert themselves, etc.

### Examples
* Singly Linked Lists
- Undo button of any application like Microsoft Word, Paint, etc: A linked list of states.
- GPS Navigation: A linked list of map data. Travelling from origin to destination is example of traversing through all nodes. Rerouting by a GPS is an example of Add and Remove operations of map data.

* Doubly Linked Lists
- Browser's Next and Previous Button: a linked list of URLs.
- Image Viewer's Next and Previous Button: a linked list of images
- Undo and Redo button of Photoshop, a linked list of states.