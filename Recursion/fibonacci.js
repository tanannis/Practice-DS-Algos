/* find the nth fibonacci number 
  0,1,1,2,3,5,8,13,21,34,55,89,144...

  n = fib(n-1) + fib(n-2)
*/

// Recursion: O(2^n) exponential time without caching
function fibonacciRecursive(n) {
    if (n < 2) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}
const res = fibonacciRecursive(8); 
console.log("Recursive Result", res);


// Iteration: O(n)
// build an array and find the nth ele in array
function fibonacciIterative(n) {
    let arr = [0,1]
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    // console.log("arr", arr) // [0, 1, 1, 2, 3, 5, 8]
    return arr[n];
}
const ans = fibonacciIterative(8)
console.log("Iterative Answer", ans)
