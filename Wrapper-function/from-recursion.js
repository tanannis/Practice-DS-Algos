/* Write two functions that finds the factorial of any number, e.g. 5! 
   5! = 5*4*3*2*1
   5! = 5*4!
   5! = 5*4*3!
   5! = 5*4*3*2!
   5! = 5*4*3*2*1!
*/

// Recursion using closure
function findFactorialRecursive1(n) {
    let answer = 1;

    function findAnswer() {
        // base case
        if (n < 2) {
            return answer;
        } else {
            answer = answer * n;
            n--;
            // console.log("ANSWER", answer)
            return findAnswer()
        }
    }
    return findAnswer();
}

 const res = findFactorialRecursive1(5); // 120
 console.log("Recursive Result 1", res);
 

