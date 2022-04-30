/* Write a function, countVowels, that accepts a string as an argument and returns the number of      vowels in that string. Use recursion.
Ex:
countVowels('Four score and seven years'); // => 9
*/

function countVowels(str, count = 0) {
    // base case
    if (str.length < 2) {
      if (isVowel(str[0])) {
        return count + 1;
      }
      return count;
    }
    // recursive case
    if (isVowel(str[0])) count++;
    // if slicing str until it gets to the last char
    str = str.slice(1);
    return countVowels(str, count)
  }

// helper function
function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

const total = countVowels('Four score and seven years') //9
console.log("total", total)