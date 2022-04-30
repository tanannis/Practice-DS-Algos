/* Write a function, backwardString, that receives a string as an argument. It should log every letter in the string, from the last character to the first. Use recursion.

backwardString('happy');
// y
// p
// p
// a
// h
*/

function backwardString (str) {
    // if string only has 1 char, log it out
    if (str.length < 2) {
      console.log(str);
      return;
    }
    // always log the last char because we want to log backward
    let lastChar = str[str.length - 1];
    console.log(lastChar);
    // otherwise keeps slicing the str length from the back 
    // when use slice method, it includes the begining index but EXCLUDES the end index
    // so it keeps excluding the last index until str length becomes 1
    str = str.slice(0, str.length-1)
    return backwardString(str);
}

backwardString("happy")