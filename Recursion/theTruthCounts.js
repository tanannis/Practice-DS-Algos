/* Write a function, theTruthCounts, that accepts a multi-dimensional array of values as argument. theTruthCounts should return the count of all truthy values inside the multidimensional array.
Ex:
theTruthCounts([0, [true, ['yes']]]); // => 2
*/

function theTruthCounts(arr, count = 0) {
    for (const val of arr) {
      //if value is another array, keeps digging
      if (Array.isArray(val)) {
        count = theTruthCounts(val, count);
      } else {
        // check if value is truthy
        if (isTruthy(val)) count++;
      }
    }
    return count;
}
  
function isTruthy(val) {
    const falsyVals = [0, false, undefined, null];
    if (falsyVals.includes(val)) {
        return false;
    }
    return true;
}

// const count = theTruthCounts([0, [true, ['yes']]])
// 2
// const count = theTruthCounts([false, 'facts', undefined])
// 1
// const count = theTruthCounts([[0], [true], [10]]);
// 2
const count = theTruthCounts([1, ['true', [true, 0, 'you bet!', 20], true, null], undefined, ['yes', false, 0]]);
// 7
console.log("truth count =", count);