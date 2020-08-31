//Recursion
  //Objectives
    //Define what Recursion is and how it can be used
    //Understand the two essential componenents of a recursive function
    //Visualize the call stack to better debug and understand recursive functions
    //Use helper method recusion and pure recursion to solve more difficult proplems

//What is Recursion?
  //A process/function that calls itself

//Two things every recursive function must have...
  //Base Case: the condition when the recursion ends. Must have a stopping point
  //Different Input: everytime the function is called you want it to be called on a different piece of data.

function countDown(num){
  //base case
  if(num <= 0) {
    console.log('All Done!')
    return
  }
  console.log(num)
  //different input
  num--
  countDown(num)
}
// countDown(7)

function sumRange(num){
  //base case
  if(num === 1) return 1;
  //different input
  return num + sumRange(num-1)
}
// console.log(sumRange(5))

//iterative solution
function factorial(num){
  let total = 1
  for(let i = num; i > 1; i--){
    total *= i
  }
  return total
}
// console.log(factorial(3))

//recursive solution
function factorialRecursive(num){
  if(num === 1) return 1;
  return num * factorialRecursive(num - 1)
}
// console.log(factorialRecursive(3))

//Helper Method Recursion vs Pure Recursion
  //Helper Method Recursion = a design pattern where an outer function that is not recursive calls an inner function that is recursive
  //Pure Recursion = the function is self contained and recursive

//Helper Method
function collectOddValues(arr){
  let result = [];
    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
// collectOddValues([1,2,3,4,5,6,7,8,9])

//Pure Recursion
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }   
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }   
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
// collectOddValues([1,2,3,4,5])