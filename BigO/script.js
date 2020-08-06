//What is Big O?
  // A way to test how efficiant code is and analyze performance.
  // Relationship between input size and time to run relative to that input.
  // Helps me as a develper determine the best implementation of a function based on performance.

//Example: 
  // Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// How do I estimate Big O time complexity for a function?
  // Figure out the number of small operations the computer needs to perform to complete.
  // A function with input of n has what output (f(n) = ?)
// How do I estimate Big O space complexity for a function?
  // How much additional memory do I need to allocate to run an operation.

// Examples of types
  // Linear: (f(n) = n) || O(n), as input n scales the runtime scales
  // Quadratic: (f(n) = n^2) || O(n^2), as input n scales the runtime scales related to the square of n.
  // Constant: (f(n) = 1) || O(1), as n grows the runtime doesn't really change.

function addUpToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++){
    total += i;
  }
  return total
}
console.log(addUpToN(6))
// The number of simple operations grows, roughly proportionate with n.
// Big O time complexity is O(n).
// Big O space complexity is O(1)

function addUpToNAgain(n) {
  return n * (n + 1) / 2;
}
console.log(addUpToNAgain(6))
// 3 simple operations, regardles of the size of n.
// Big O time complexity is O(1).
// Big O space complexity is O(1)

function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  for (let j = n - 1; j >= 0; j--){
    console.log(j)
  }
}
countUpAndDown(5)
// The number of simple operations grows, roughly proportionate with n.
// Number of operations is eventually bounded by a multiple of n
// Big O time complexity is O(n).

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printAllPairs(3)
// O(n) operation inside of an O(n) opeation.
// As input n scales the runtime squares.
// Big O time complexity is O(n^2)