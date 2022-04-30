/* Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array. Use recursion.

let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr) // [4,3,2,1]
console.log(arr) // [1,2,3,4]
*/

// If can't mutate the origin arr
function reverseArray(arr, reversedArr = []) {
    if (arr.length < 1) return reversedArr;
    let lastChar = arr[arr.length-1];
    reversedArr.push(lastChar);
    arr = arr.slice(0, -1);
    return reverseArray(arr, reversedArr)
}
const reversed1 = reverseArray([1,2,3,4]);
console.log("reversed 1", reversed1)


// if ok to mutate
function reverseArray2(arr, reversedArr = []) {
    if (arr.length < 1) return reversedArr;
    reversedArr.push(arr.pop());
    return reverseArray(arr, reversedArr)
}
const reversed2 = reverseArray2([1,2,3,4]);
console.log("reversed 2", reversed2)