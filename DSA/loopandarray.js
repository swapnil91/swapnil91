/* jshint esversion: 7 */

// Loop related challenges.
class Loop {
    printPowers(A, B) {
        let power = 1;
        for (let i = 1; power <= B; i++) {
            console.log(power);
            power *= A;
        }
    }

    fizzBuzz(n){
        for (let i = 1; i <= n; i++)
         {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }

    longestCommonPrefix(s1, s2){
        let minLength = Math.min(s1.length, s2.length);
        let prefix = '';
        for (let i = 0; i < minLength; i++) {
            if (s1[i] === s2[i]) {
                prefix += s1[i];
            } else {
                break;
            }
        }
        console.log(prefix);
    }

    /**
     * Input:  names = ["John", "Doe", "Andy", "Smith", "Mary", "Johnson"]
     * Output:  ["John Doe", "Andy Smith", "Mary Johnson"]
     *
     * @param names
     */
    getFullNames(names){
        let fullNames = [];
        for (let i = 0; i < names.length; i += 2) {
            fullNames.push(names[i] + ' ' + names[i + 1]);
        }
        console.log(fullNames);
    }

    /**
     * Given a positive number S, find the largest number n such that the sum
     * 1^2 + 2^2 + 3^2 + ... + n^2 is less than or equal to S.
     *
     * Input: S = 35
     * Output: 4
     */
    findLargestNumber(S){
        let sum = 0;
        let n = 1;
        while (sum + n * n <= S) {
            sum += n * n;
            n++;
        }
        return n - 1;
    }

    /**
     * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,such that each number
     * is the sum of the two preceding ones, starting from 0 and 1. means fib(n) = fib(n - 1) + fib(n - 2)
     */
    fibonacciNumbers(n){
        if(n < 2){
            return n;
        }
        let prev = 0, curr = 1;
        for(let i = 2; i <= n; i++){
            let next = prev + curr;
            prev = curr;
            curr = next;
        }
        return curr;
    }

    /**
     *
     * The Tribonacci numbers,commonly denoted T(n) form a sequence,called the Tribonacci sequence,such that each number
     * is the sum of the two preceding ones, starting from 0, 1 and 1.
     */
    tribonacci(n) {
        if(n < 2){
            return n;
        }
        let prev_one = 0, prev = 1, curr = 1;
        for(let i = 3; i <= n; i++){
            let next = prev_one + prev + curr;
            prev_one = prev;
            prev = curr;
            curr = next;
        }
        return curr;
    }

    /**
     * Given an array of integers, return the maximum value and its number of occurences.
     *
     * Example:
     *
     * Input: nums = [2, 7, 11, 8, 11, 8, 3, 11]
     * Output: [11, 3]
     * Explanation: The maximum value is 11 and it appears 3 times
     *
     * Note:
     * Your algorithm should run in O(n) time and use O(1) space.
     *
     *
     * Follow up:
     * Could you do this in one pass (e.g. looping over the array only once)?
     */
    maxValNumOfOccurrences(nums) {
        let max_num = 0;
        let occurrence = 0;
        for(let num of nums){
            if(num > max_num){
                max_num = num;
                occurrence = 1;
            }else if(num === max_num){
                occurrence++;
            }
        }
        return [max_num, occurrence];
    }
}

let loop = new Loop();
loop.printPowers(3, 100);
console.log('\n');
loop.fizzBuzz(15);
console.log('\n');
loop.longestCommonPrefix('hello', 'help');
console.log('\n');
loop.getFullNames(["John", "Doe", "Andy", "Smith", "Mary", "Johnson"]);
console.log('\n');
console.log(loop.findLargestNumber(35));
console.log('\n');
console.log(loop.fibonacciNumbers(4));
console.log('\n');
console.log(loop.tribonacci(4));
console.log('\n');
console.log(loop.maxValNumOfOccurrences([2, 7, 11, 8, 11, 8, 3, 11]));
