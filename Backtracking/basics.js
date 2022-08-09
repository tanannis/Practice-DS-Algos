/* Backtracking is recursive backtrack exploring all possible paths / solutions
- Can build a decision binary tree to visualize the concept: 
  Use or Don't Use an element
- Time = O(n * 2^n) 
  where n represents size of input
  and 2 represents the 2 branches in the decision tree

Explain: https://www.youtube.com/watch?v=REOH22Xwdkk

Example:
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order

Input: nums = [1,2,3]   Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Input: nums = [0]   Output: [[],[0]]
*/
const subsets = (nums) => {
	const result = [];

	let subset = [];

	const backtrack = (i) => {
		if (i >= nums.length) {
			result.push(subset.slice());
			return;
		}
		// decision to include nums[i];
		subset.push(nums[i]);

		// decision NOT to include nums[i];
		subset.pop();
		backtrack(i + 1);
	};

	backtrack(0);
	return result;
};
