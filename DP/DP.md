# Dynamic Programming
https://algo.monster/problems/dynamic_programming_intro

## When to use dynamic programming?
- The problem asks for the maximum/longest, minimal/shortest value/cost/profit you can get from doing operations on a sequence.
- The problem asks for how many ways there are to do something. This can often be solved by DFS + memoization, i.e. top-down dynamic programming.
- Partition a string/array into sub-sequences so that a certain condition is met. This is often well-suited for top-down dynamic programming.
- The problem is about the optimal way to play a game.


### Top-Down
Recursive DFS + Memoization
- Decision tree
- Split large problems and solve each smaller problems from the top on the way down


### Bottom-Up
Iterative with Tabulation (array) OR with 2 variables
- Start with the subproblems first and work our way up to the main problem. 
- This is normally done by filling up a table.
