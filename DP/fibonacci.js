
// Optimized Bottom-Up approach using 2 pointers,  O(n) time, O(1) space
const fib = (n) => {            // n = 5
  if (n < 1) return 0;
  
  let prev = 0;       // 1, 1, 2, 3,
  let current = 1;    // 1, 2, 3, 5
  
  for (let i = 1; i < n; i++) {   // i =  1, 2, 3, 4
      let next = prev + current;       // 1, 2, 3, 5,
      prev = current;
      current = next;
  }

  return current;
};



// Dynamic Programing: Iterative Bottom-Up with array, O(n) time, O(n) space
const fib2 = (n) => { 
  if (n < 1) return 0;

  let nums = [0,1];       
  for (let i = 1; i < n; i++) {
      let next = nums[i-1] + nums[i];
      nums.push(next);      
  }

  return nums[nums.length - 1];
};



// Dynamic Programming: Top-Down solution w/ memoization, O(n) time, O(n) space
const fibonacciDP = (n, memo = {}) => {
  if (n < 2) return n;
  if (n in memo) return memo[n];

  memo[n] = fibonacciDP(n-1, memo) + fibonacciDP(n-2, memo);
  return memo[n];
}

console.log(fibonacciDP(10));



// DO NOT USE! 
// Original Top down solution with Recursion: O(2^n) exponential time without caching
const fibonacci = (n) => {
  if (n < 2) return n;
  return fibonacci(n-1) + fibonacci(n-2);
 }

console.log(fibonacci(10));
