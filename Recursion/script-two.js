//Wrie a function called power, which accepts a base and an exponent
//The function should return the power of the base to the exponent

function power(num, exponenet){
  //base case
  if(exponenet === 0) return 1;
  //different input
  return num * power(num, exponenet - 1);
}
// console.log(power(2,0)) //1
// console.log(power(2,2)) //4
// console.log(power(2,4)) //16

//Write a function called factorial which accepts a number and returns the factorial of that number
//example factorial 3 is 3*2*1 = 6
//factorial zero is always 1

function factorial(num){
  if(num === 0) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(1)) //1
// console.log(factorial(2)) //2
// console.log(factorial(4)) //24
// console.log(factorial(7)) //5040

//Write a function called productOfArray which takes in an array and returns the product of them all.
//product is each number multiplied by the next

function productOfArray(array){
  if(array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}
// console.log(productOfArray([1,2,3]))
// console.log(productOfArray([1,2,3,10]))
// console.log(productOfArray([]))

//Write a function called recursiveRange that accepts a number and adds up all the numbers from 0 to that number
//example recursiveRange(6) = 6+5+4+3+2+1+0 = 21

function recursiveRange(num){
  if(num === 0) return 0;
  return num + recursiveRange(num - 1);
}
// console.log(recursiveRange(6)) //21
// console.log(recursiveRange(10)) //55

//Write a recursive function called fib
//which accepts a number and returns nth number in the fibonacci sequence
//fibonacci sequence is the sequence of whole numbers which starts with 1 and 1
//where every number thereafter is equal to the sum of the previous 2 numbers

function fib(num){
  if(num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
// console.log(fib(4))
// console.log(fib(10))
  

