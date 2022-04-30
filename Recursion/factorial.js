/* Write two functions that finds the factorial of any number, e.g. 5! 
   5! = 5*4*3*2*1
   5! = 5*4!
   5! = 5*4*3!
   5! = 5*4*3*2!
   5! = 5*4*3*2*1!
*/

// Recursion 
function findFactorialRecursive(n) {
   // base case
   if (n === 2) return n;
   return n * findFactorialRecursive(n-1);
}
const res = findFactorialRecursive(5); // 120
console.log("Recursive Result", res);


// Iteration
function findFactorialIterative(n) {
     let answer = 1;
     for (let i = n; i >= 2; i--){
         answer *= i;
     }
    return answer;
}
const result = findFactorialIterative(5); // 120
console.log("Iterative Result", result);