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

//Write a function called averagePair. 
//Given a SORTED array of integers and a target average
//determine if there is a pair of values in the array where the average of the pair equals the target average
//there may be more than one pair that matches the average.

function averagePair(sortedArray, avg){
  if(sortedArray.length <= 1) return false;
  let left = 0
  let right = sortedArray.length -1
  while(left < right){
    let average = (sortedArray[right] + sortedArray[left]) / 2
    if(average > avg){
      --right
    } else if (average < avg){
      ++left
    } else {
      return true
    }
  }
  return false 
}

// console.log(averagePair([1,2,3], 2.5)) //true
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) //true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) //false
// console.log(averagePair([], 4)) //false

//Write a function called isSubsequence
//which takes in two strings and determines if the characters in the first string form a subsequence in of the characters in the second string
//in other words the function should check if the characters in the first string appear somewhere in the second string
//ORDER MATTERS

function isSubsequence(string1, string2){
  let i = 0;
  let j = 0;
  while(j < string2.length){
    if(string1[i] === string2[j])i++;
    if(i === string1.length)return true;
    j++
  }
  return false
}

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'acb'))