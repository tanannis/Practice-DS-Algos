/* Write a function, countToTen, that receives a number less than or equal to 10. countToTen should console.log every number between the given number and 10, including 10. Use recursion.

countToTen(1);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
*/

function countToTen(n) {
  if (n > 10) return;
  console.log(n)
  return countToTen(n + 1)
}
countToTen(1)