/* Write a function, arraySum, that accepts an array of numbers as an argument and returns the sum of all the numbers in the array (no matter how nested!).
Ex:
arraySum([1, [2, 3, [4]]]) // => 10
*/

function arraySum(nums, sum = 0) {
    for (const ele of nums) {
        // if ele is an array, keep digging
        if (Array.isArray(ele)) {
            sum = arraySum(ele, sum);
        } else {
            // else must be a num, just add it to the sum
            sum += ele;
        }
    }
    return sum;
}

// const sum = arraySum([1, [2, 3, [4]]]); 
//10
// const sum = arraySum([1, 2, 3]); 
//6
// const sum =  arraySum([[10], [10], [10]]); 
//30
const sum = arraySum([8, [6, [7, 5, 3], [0, 9]]]) 
//38
console.log("SUM,", sum)