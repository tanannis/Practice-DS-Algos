/* Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WD class:

WD() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter. 
*/

class Node {
  constructor() {
      this.children = new Map();
      this.end = false;
  }
}

class WordDictionary {
  constructor() {
      this.root = new Node();
  }
  
 addWord(word) {
      let node = this.root;
     
      for (let char of word) {
          if(!node.children.has(char)) node.children.set(char, new Node());
          const child = node.children.get(char);
          node = child;
      }
      node.end = true;
  }
  
   // Use DFS for "." chars 
   search (word) { 
      const dfs = (root, level) => {
          let node = root;
          
          for (let i = level; i < word.length; i++) {
              if (word[i] === ".") {
                  for (let [key, next] of node.children) {
                      if (dfs(next, i+1)) return true;
                  }
                  return false;
              }
              if (!node.children.has(word[i])) return false;
              node = node.children.get(word[i])  
          }
          return node.end;   
      }
      
      return dfs(this.root, 0);
  }

}

const WD = new WordDictionary();
WD.addWord("bad");
WD.addWord("dad");
WD.addWord("mad");

console.log(WD.search("pad")); // false
console.log(WD.search("bad")); // true
console.log(WD.search(".ad")); // true
console.log(WD.search("b..")); // true

