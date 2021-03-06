const button = document.querySelector('button')
const inspo = document.querySelector('.inspo')

document.addEventListener('DOMContentLoaded', () => {
  handleClick()
})

const handleClick = () => {
  button.addEventListener('click', () => {
    let quote = document.createElement('p')
    quote.innerText = 'GET IT GIRL!!!'
    inspo.append(quote)
  })
}

//Linear Search
  //Moving at a set interval, one item at at a time, checking each value
  //must use linear search when working with unsorted data

//Write a function that accepts an array and a value
//loop throug the array and check if the current array element is equal to the value
//if it is, return the index of that value
//if not return -1

function linearSearch(array, val){
  for (let i = 0; i < array.length; i++){
    if (val === array[i]){
      return i;
    }
  }
  return -1
}
// console.log(linearSearch([1,4,55,17,12], 17))
//time complexity is linear O(n), as the length of the array grow, so does the amount of time


//Binary Search
  //Only works on sorted data
  //Can be much faster than a linear search, especially with large data structures
  //Use the Divide and Conquer technique. Start at the middle of the array,
  //create pointers representing the beginning and end of the array
  //depending on if the middle is greater than or less than the value being searched
  //move the appropriate pointer, which will shrink the portion of the data being searched.
//write a function that accepts a sorted array and a value (both numbers)
//create a left pointer at beginning of array and right pointer at end of array
//while the left pointer comes before the right pointer
//create a pointer in the middle
//if I find the value I want return the index
//if the value is too small, move the left pointer up
//if the value is too large, move the right pointer up
//if I never find the value, return -1

function binarySearch(sortedArr, val){
  let start = 0
  let end = sortedArr.length - 1
  let middle = Math.floor((start + end) / 2)
  while(sortedArr[val] !== middle && start <= end){
    if(val < sortedArr[middle]) end = middle - 1;
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return sortedArr[middle] === val ? middle : -1
}
// console.log(binarySearch([1,2,3,4,5], 2))
// console.log(binarySearch([1,4,5,7,9,10,15,17,19,23], 19))
// console.log(binarySearch([2,3,4,6,8,9,11,15,28,33,45,56,67], 29))
// time complexity of binarySearch is best case linear O(1) because the correct value could be the first number in the middle of the array
// worst and average case time complexity is Logarithmic log base 2 of n or O(log n) 
  //exaplanation: because if we have an array of 16 values it would take 4 trials to find the value or determine the value doesn't exist (2*2*2*2 = 16)
  //if the array.length doubles it will take 5 trials to determine location of value or non existence of value (2*2*2*2*2 = 32)

//Naive String Search
  //count the number of times a smaller string appears in a longer string and return the count

function stringSearch(string, pattern){
  let count = 0
  for(let i = 0; i < string.length; i++){
    for(let j = 0; j < pattern.length; j++){
      //string[i+j] lets me look forward in the long string as I loop through the patter to be matched
      if(pattern[j] !== string[i+j]) break
      if(j === pattern.length -1) count++
    }
  }
  return count
}
console.log(stringSearch('haha harry', 'ha'))