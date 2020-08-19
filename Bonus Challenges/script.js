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