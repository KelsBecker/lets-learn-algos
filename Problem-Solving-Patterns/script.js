//Master Common Problem Solving Patterns
//Not a fix all but frequently a good place to start when coming up with a plan

// Frequency Counter
  // this uses objects or sets to collect values/count frequencies of values
  // comes in very handy when needing to check letters in strings or how many times a number occurs in values
  // comparing two different values to find a common value or make sure all values match.
  // this can often avoid the need for nested loops or (On^2) operations with arrays and strings

//Write a function called same, which accepts two arrays. 
//The function should return true if every value in the array has it's corresponding value squared in the second array. 
//The frequency of values must be the same.

function same(array1, array2) {
    if(array1.length !== array2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of array1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of array2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
// console.log(same([1,2,3], [4,1,9])) //true
// console.log(same([1,2,3], [1,9])) //false

//Given two strings, write a function to determine if the second string is an anagram of the first.
//Do not worry about case, punctuations, or spaces

function anagram(string1, string2) {
  let obj = {};
  if (string1.length !== string2.length){
    return false
  }
  //construct an object out of string1
  for(let i = 0; i < string1.length; i++){
    let letter = string1[i]
    obj[letter] ? ++obj[letter] : obj[letter] = 1
  }
  //check if all characters in string two are available in obj
  for(let i = 0; i < string2.length; i++) {
    let letter = string2[i]
    if (!obj[letter]) {
      return false
    } else {
      --obj[letter]
    }
  }
  return true
}
// anagram('', '') // false
// console.log(anagram('aazs', 'zza')) // false
// console.log(anagram('anagram', 'nagaram')) // true
// anagram('awesome', 'awesom') // false
// anagram('texttwisttime', 'timetwisttext') // true


//Multi Pointers Pattern
  //Creating pointers or values that correspond to an index or position 
  //and move towards the beginning, end or middle based on a certain condition
  //can be used to find pairs or unique items

//Write a function called sumZero which accepts a sorted array of integers. 
//The function should find the first pair where the sum is 0. 
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(sortedArray) {
  //variables for first and last index of array
  let left = 0
  let right = sortedArray.length -1

  while(left < right) {
    let sum = sortedArray[left] + sortedArray[right]
    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]]
    } else if (sum > 0){
      right--
    } else {
      left++
    }
  }
}
// console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// console.log(sumZero([1,2,3])) // undefined

//Implement a function called countUniqueValues, which accepts a sorted array, 
//and counts the unique values in the array. 
//There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(array){
  //if the array is empty return 0
  if (array.length === 0) return 0;
  let i = 0
  //loop through the array, placing all unique values at the beginning of the array 
  for (let j = 1; j < array.length; j++){
    if (array[i] !== array[j]){
      i++
      array[i] = array[j]
    }
  }
  // return the count of i, which represents how many unique values
  return i +1
}
// console.log(countUniqueValues([-2,-1,-1,0,1])) //4
// console.log(countUniqueValues([])) //0
// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7


//Sliding Window Approach
  //This pattern involves creating a window which can either be an array or number from one position to another
  //Depending on a certain condition the window either increases or closes and a new window is created.
  //very useful for keeping track of a subset of data in an array/string etc.

//Write a function called maxSubArraySum,
//which accepts an array of integers and a number called num
//The function should calculate the sum of num consecutive elements in the array.
//return the sum at the end.

function maxSubArraySum(array, num) {
  let max = 0;
  let temp = 0 
  if(array.length < num) return null;
  //sum together the first 3 digits
  for(let i = 0; i < num; i++){
    max += array[i]
  }
  temp = max
  //start at indeces num (3) in array
  //with each loop remove the first indices and add the next so add 5,2,5, then 2,5,6 then 5,6,7 etc
  //each time I loop set the value of max to the highest of the two numbers
  for(let i = num; i < array.length; i++){
    temp = temp - array[i-num] + array[i]
    max = Math.max(max, temp)
  }
  return max
}

maxSubArraySum([5,5,2,5,6,7,8,1,3], 3)