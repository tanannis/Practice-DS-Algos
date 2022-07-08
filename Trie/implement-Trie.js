/* https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22531880#overview

Trie (Prefix-Tree)
- a N-ary root tree with empty root node as starting point
- a specialized tree used for searching, mostly text
- allows you to know if a word or a body of a word exist
- for searching words in a trie
- all we have to do is look for the length of the word

Advantages
- Speed: time is O(length) = length of the word
- Space: only store the parent once to avoid storing multiple times, and will have children
don't have to store the word itself

                             Root
                 A        D         N       Z
               P   S     O        E   O       E
             P          G        W      T       N
                                  S

Trie = {
  root: TrieNode {
    isEnd: false,
    keys: {
      a: TrieNode {
        isEnd: false,
        keys: {
          p: TrieNode {
            isEnd: false,
            keys: {
              p: TrieNode {
                isEnd: true,
                keys: {
                  l: TrieNode {
                    isEnd: false,
                    keys: {
                      e: TrieNode {
                        isEnd: true,
                        keys: {}
                      }
                    }
                  },
                },
              },
            }
          }
        }
      }
    }
  }
}
*/

class TrieNode {
  constructor() {
    this.isEnd = false;
    this.keys = {};
  }
}

// Simple iterative solution walking down the tree as we create each node
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert (word) {
    let node = this.root;
      
    for (let char of word) {   
      /* if char not in current node's keys {} -----> TrieNode { keys: {} }
        add it as a new child to current node's keys {} as a new trie node -----> TrieNode { keys: { a: TrieNode { keys: {} } } }
        e.g. node.keys["a"] = TrieNode { keys: {} }
      */     
        if (!node.keys[char]) node.keys[char] = new TrieNode(); 
        
        // then move on to the next node which is the child node, "a"
        const child = node.keys[char];
        node = child;
    }  
      node.isEnd = true;
  }

  search (word) {
     let node = this.root;
      
     for (let char of word) {
        if (!node.keys[char]) return false;
        node = node.keys[char];
    } 
      return node.isEnd === true ? true : false;
  }

  startsWith (prefix) {
    let node = this.root;
      
    for (let char of prefix) {
        if (!node.keys[char]) return false;
        node = node.keys[char];
    }  
    return true;
  }
    
}



/* DFS recursion: recursively checking 1st char of sliced word
  "apple" -> is "a" in nodes.keys? No, add "a" and slice word
  "pple" -> is "p" in nodes.keys? No, add "p" and slice word
*/
/*
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  
  insert (word, node = this.root) {
    if (word.length === 0) {
      node.isEnd = true;
      return;
    }

    const start = word[0];
    // instead of using [] or {}, we use a node, and each node is a child of the prev node
    if (!node.keys[start]) {
      node.keys[start] = new TrieNode();  
    } 

    return this.insert(word.slice(1), node.keys[start]);
  }

  search (word, node = this.root) {
    if (word.length === 0 && node.isEnd === true) return true;
    if (word.length === 0 && node.isEnd === false) return false;
    
    const start = word[0];
    if (!node.keys[start]) return false;

    return this.search(word.slice(1), node.keys[start]);
  }

  startsWith (prefix, node = this.root) {
    if (prefix.length === 0) return true;
    
    const start = prefix[0];
    if (!node.keys[start]) return false;

    return this.startsWith(prefix.slice(1), node.keys[start]);
  }
}
*/

let trie = new Trie();

trie.insert("dog");
// trie.insert("apple");
// 
// console.log(trie.search("dog"));   // true
// console.log(trie.search("app"));   // false
// 
// console.log(trie.startsWith("app"));   // true
// 
// trie.insert("app"); 
// console.log(trie.search("app"));    // true 

console.log(trie.root.keys)
