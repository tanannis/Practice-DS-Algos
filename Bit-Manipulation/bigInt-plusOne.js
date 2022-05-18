/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]. Incrementing by one gives 4321 + 1 = 4322. Thus, the result should be [4,3,2,2].

Input: digits = [9]
Output: [1,0]. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0].
*/

// Incrementing the digit directly won't work when the digits is a super long big int
// Loop array backward and maunipulate each digit 
// If current digit is NOT a 9, just + 1
// else if it's a 9, turn it into a 0, add 1 to the next digit 
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] != 9) {
      console.log(digits[i])
      digits[i] += 1;
      return digits
    }
    digits[i] = 0;
  }
  // add 1 to the front
  // digits.unshift(1);

  // this is faster than unshift
  digits = [1].concat(digits) 
  
  return digits
}

// const res = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);
const res = plusOne([9,9,9,9,9]);
console.log("RES", res)