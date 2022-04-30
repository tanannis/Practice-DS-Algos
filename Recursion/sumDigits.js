/* Write a function, sumDigits, that sums up all the digits of a number passed in as an argument. You can assume that the argument will be a positive integer. Use recursion.
Ex:
sumDigits(1234) // => 10
*/

function sumDigits(num, sum = 0) {
    let str = num.toString();
    if (str.length < 1) return sum;
    sum += Number(str[0]);
    str = str.slice(1);
    return sumDigits(str, sum);
}

const sum = sumDigits(1234) // 10
console.log("sum", sum);