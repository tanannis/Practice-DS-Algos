/*
Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num. You can assume that num will be greater than 1. Use recursion.
sumNums(3); // => 6 (3 + 2 + 1)
*/

function sumNums(num, sum = 0) {
    if (num < 1) return sum;
    sum += num;
    return sumNums(num - 1, sum)
}
const sum = sumNums(3) // 6
console.log("SUM", sum)