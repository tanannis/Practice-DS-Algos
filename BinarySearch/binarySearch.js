/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/* We want to keep cutting the array in half until we find the answer
  midPt = (startIdx + endIdx) / 2
  if target same as midPt ele, return midPt
  if target is < midPt ele, search on the left side only
  if target is > midPt ele, search on the right side only

  if target not found:
  if target < midPt ele, return midPt - 1
  if target > midPt ele, return midPt + 1
*/

// iterative 
const searchInsert = (nums, target) => {
  let startIdx = 0;
  let endIdx = nums.length -1;

  while (startIdx < endIdx) {
    let midPt = Math.round((startIdx + endIdx) / 2);
    if (target === nums[midPt]) return midPt;
    else if (target < nums[midPt]) endIdx = midPt - 1;
    else startIdx = midPt + 1;
  }
  // if not found, insert it in the correct index
  // if target is larger than the 1st ele, insert it after the 1st ele
  // else if target is smaller than the 1st ele, take its index and push 1st ele to 2nd
  return target > nums[startIdx] ? startIdx + 1 : startIdx;
}

// const res = searchInsert([1,3,5,6], 5) //2
// const res = searchInsert([1,3,5,6], 2) //1
// const res = searchInsert([1,3,5,6], 7) //4
const res = searchInsert([1,3,5,6], 0) //0

console.log("RESULT", res)


// recursive
const searchInsertRecursive = (nums, target) => {
  return binarySearch(nums, 0, nums.length-1, target);
}

const binarySearch = (nums, startIdx, endIdx, target) => {
  console.log("start", startIdx)
  console.log("end", endIdx)
  if (startIdx > endIdx) return startIdx;
  const midPt = Math.round((startIdx + endIdx) / 2);

  if (target === nums[midPt]) {
    return midPt;
  } else if (target < nums[midPt]) {
    return binarySearch(nums, startIdx, midPt - 1, target);
  } else {
    return binarySearch(nums, midPt + 1, endIdx, target);
  }
}

// const res = searchInsertRecursive([1,3,5,6], 5) //2
// const res = searchInsertRecursive([1,3,5,6], 2) //1
// const res = searchInsertRecursive([1,3,5,6], 7) //4
// const res = searchInsertRecursive([1,3,5,6], 0) //0

// console.log("RESULT", res)