// Write a function called sameFrequency
// Given two positive integers, find out if the two numbers have the same frequency of digits.
  //Use frequency counter problem solving pattern

function sameFrequency(num1, num2){
  let frequencyObj = {}
  let firstNum = num1.toString()
  let secondNum = num2.toString()
  if (firstNum.length !== secondNum.length){
    return false
  } 
  for(let i = 0; i < firstNum.length; i++){
    let num = firstNum[i]
    frequencyObj[num] ? ++frequencyObj[num] : frequencyObj[num] = 1
  }
  for(let i = 0; i < secondNum.length; i++){
    let num = secondNum[i]
    if(!frequencyObj[num]){
      return false
    } else {
      --frequencyObj[num]
    }
  }
  return true
}

// console.log(sameFrequency(22, 222))
// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(77789, 97878))

//Implement a function called areThereDuplicates() which accepts a variable number of arguments
//and checks if there are any duplicates among the arguments passed in.

function areThereDuplicates(...args) {
  let noDuplicates = new Set(args)
  if(noDuplicates.size === args.length){
    return false
  } else {
    return true
  }
}

// console.log(areThereDuplicates(1,2,3))
// console.log(areThereDuplicates(1,2,2))
// console.log(areThereDuplicates('a','b','c','a'))