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

//write a function that accepts a sorted array and a value (both numbers)
//create a left pointer at beginning of array and right pointer at end of array
//while the left pointer comes before the right pointer
//create a pointer in the middle
//if I find the value I want return the index
//if the value is too small, move the left pointer up
//if the value is too large, move the right pointer up
//if I never find the value, return -1

function binarySearch(sortedArr, val){
  let start = 0;
  let end = sortedArr.length -1;
  let middle = Math.floor((start + end) / 2);
  while(sortedArr[val] !== middle && start <= end){
    if(val < sortedArr[middle]){
      end = middle - 1
    } else {
      start = middle +1
    }
    middle = Math.floor((start + end) / 2)
  }
  if(sortedArr[middle] === val){
    return middle
  } 
  return -1
}
// console.log(binarySearch([1,2,3,4,5], 2))