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

//Write a function called maxSubarraySum
//which takes an array of integers and a number
//find the maximum sum of the the subarray with the length of the number passed to the function
//the subarray must consist of consecutive elements in the array

function maxSubarraySum(array, num){
  let max = 0;
  let temp = 0;
  if(array.length < num) return null;
  for(let i = 0; i < num; i++){
    max += array[i]
  }
  temp = max
  for(let i = num; i < array.length; i++){
    temp = temp - array[i-num] + array[i]
    max = Math.max(max, temp)
  }
  return max
}

// console.log(maxSubarraySum([100,200,300,400], 2)) //700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) //39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) //5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) //5
// console.log(maxSubarraySum([2,3], 3)) //null


//Write a function called minSubArrayLen 
//which accepts two parameters - an array of positive integers and a positive integer
//should return the minimal length of a contiguous subarray of which the sub is greater than or equal to the integer passed to the function
//if there isn't one, return 0 instead

function minSubArrayLen(array, sum){
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  while(start < array.length){
    if(total < sum && end < array.length){
      total += array[end]
      end++ 
    } else if(total >= sum){
      minLength = Math.min(minLength, end-start)
      total -= array[start]
      start++
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength
}
// console.log(minSubArrayLen([2,3,1,2,4,3], 7))
// console.log(minSubArrayLen([2,1,6,5,4], 9))
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))


//Given a sorted array and a target value, 
//return the index if the target is found. 
//If not, return the index where it would be if it were inserted in order.
//You may assume no duplicate values

function searchInsert(nums, target) {
  let index = 0
  while(index < nums.length){
    if(nums[index] === target || nums[index] > target){
      return index
    } else {
      index++
    }
  }
  return index     
};
// console.log(searchInsert([1,3,5,6],5))
// console.log(searchInsert([1,3,5,6],2))
// console.log(searchInsert([1,3,5,6],7))
// console.log(searchInsert([1,3,5,6],0))


//Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
//return the length of last word 
// (last word means the last appearing word if we loop from left to right) in the string.
//If the last word does not exist, return 0.
//Note: A word is defined as a maximal substring consisting of non-space characters only

function lengthOfLastWord(string) {
  let wordLength = 0
  let beforeEmptyChar = true
  if(string.length === 0) return wordLength;
  for(let i = string.length - 1; i >= 0; i--){
    if(string.charAt(i) !== ' '){
      wordLength++
      beforeEmptyChar = false
    } else {
      if(!beforeEmptyChar){
      break
      }
    }
  }
  return wordLength
};
// console.log(lengthOfLastWord(''))
// console.log(lengthOfLastWord('Hello World '))


//Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
//The digits are stored such that the most significant digit is at the head of the list, 
//and each element in the array contains a single digit.
//You may assume the integer does not contain any leading zero, except the number 0 itself
//Examples [1,2,3] will be [1,2,4] representing #124 [9,9] will be [1,0,0] representing adding 1 to 99 which will be 100

function plusOne(digits) {
  if(digits.length === 0) return;
  for(let i = digits.length -1; i >= 0; i--){
    if(digits[i] !== 9){
      digits[i] = digits[i] + 1
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits
};
// console.log(plusOne([9,9]))
// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))


//Given an array of integers that is already sorted in ascending order, 
//find two numbers such that they add up to a specific target number.
//The function twoSum should return indices of the two numbers such that they add up to the target, 
//where index1 must be less than index2

function twoSum(numbers, target) {
  let start = 0
  let end = numbers.length - 1
  if(numbers.length < 1) return;

  while(start < end){
    if(numbers[start] + numbers[end] < target){
      start++
    } else if(numbers[start] + numbers[end] > target) {
      end--
    } else {
      return [start+1, end+1]
    }
  }    
};
// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([2,3,4], 6))
// console.log(twoSum([-1, 0], -1))
// console.log(twoSum([1,2], 3))


//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, 
//and it should return false if every element is distinct.

function containsDuplicate(nums) {
  let valueObj = {}
  for(let i = 0; i < nums.length; i++){
    valueObj[nums[i]] ? valueObj[nums[i]]++ : valueObj[nums[i]] = 1
  }
  for(const key in valueObj){
    if(valueObj[key] > 1){
      return true
    }
  }
  return false
};
// console.log(containsDuplicate([1,2,3,4]))
// console.log(containsDuplicate([1,1,3,4]))


//Given an integer array nums, find the contiguous subarray (containing at least one number) 
//which has the largest sum and return its sum.
  //keep track of sum starting from array[0]
  //compare if nums[i] or nums[i] plus the maxCurrent is greater
  //compare if current is greater than global
  //if so current becomes global
  
function maxSubArray(nums){
  let maxCurrent = nums[0]
  let maxGlobal = nums[0]
  for(let i = 1; i < nums.length; i++){
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
    console.log(nums[i])
    console.log('current', maxCurrent, 'global', maxGlobal)
    if(maxCurrent > maxGlobal){
      maxGlobal = maxCurrent
    }
  }
  return maxGlobal
}
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([0]))