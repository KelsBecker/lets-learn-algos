//Bubble Sort
  //start looping with a variable called i from the end of the array to the beginning of the array
  //start an inner loop with a variable called j loop from the beginning until i-1
  //if array[j] is greater than array[j+1], swap those two values
  //return the sorted array

function bubbleSort(array){
  for(let i = array.length; i > 0; i--){
    for(let j = 0; j < i -1; j++){
      if(array[j] > array[j+1]){
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}
// console.log(bubbleSort([5,12,17,2,23,7]))
// console.log(bubbleSort([65,43,2,87,1,32,23,44,23]))

function bubbleSortV2(array){
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }
  for( let i = array.length; i > 0; i--){
    for(let j = 0; j < i; j++){
      if(array[j] > array[j+1]){
        swap(array, j, j+1)
      }
    }
  }
  return array
}
// console.log(bubbleSortV2([5,12,17,2,23,7]))
// console.log(bubbleSortV2([65,43,2,87,1,32,23,44,23]))

//Optimized Bubble Sort
//adds a variable that keeps track of if the array is looped through and no swap is made
//which means it is already sorted
//it will then break out of the loop vs making unnecessary iterations
function optimizedBubbleSort(array){
  let noSwaps;
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }
  for( let i = array.length; i > 0; i--){
    noSwaps = true
    for(let j = 0; j < i -1; j++){
      // console.log(array, array[j], array[j+1])
      if(array[j] > array[j+1]){
        swap(array, j, j+1)
        noSwaps = false
      } 
    }
    if(noSwaps) break;
  }
  return array
}
// console.log(optimizedBubbleSort([7,1,2,3,4,5]))

//Time Complexity, due to the nested loop in bubbleSort time complexity is generally Quadratic / O(n^2)
//If the data is nearly sorted and the optimized version is used it could be Linear O(n)