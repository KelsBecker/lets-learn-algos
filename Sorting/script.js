//BUBBLE SORT
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
//Space Complexity 0(1)


//SELECTION SORT
  //similar to bubble sort, but instead of placing large values into the sorted position it starts with small values

//Selection Sort Psuedocode
  //store the first element as the smallest value 
  //compare this element to the next element in the array until you find a smaller value
  //if a smaller number is found designate it as the new minimum and continue to the end of the array
  //if the minimum is not the original value swap these two elements
  //continue until the array is sorted

  function selectionSort(array){
    for(let i = 0; i < array.length; i++){
      let min = i
      for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[min]){
          min = j
        }
      }
      if(i !== min){
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
      }
    }
    return array
  }
  // console.log(selectionSort([12,5,2,21,30,7]))
  // console.log(selectionSort([64,24,84,94,14]))
  // console.log(selectionSort([100,-45,76,18,45]))

  //Selection sort is not the most efficient. Roughly it is Quadratic O(n^2)
  //because as the length of the array grows the number of comparisons grows, rougly at the rate of n*n
  //Space Complexity 0(1)


  //INSERTION SORT
    //loop through the array starting from index 1 aka i = 1 
    //make variable currentVal = array[i]
    //make variable j = the element before array[i] aka j = array[i-1]
    //as long as array[j] >= to 0 and array[j] is > currentVal
    //place array[j] forward one place
    //decrement j each loop so on the final loop j will be one less than wher currentVal should be
    //place currentVal at array[j + 1]

    function insertionSort(array){
      for(let i = 1; i < array.length; i++){
        let currentVal = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > currentVal){
          array[j+1] = array[j]
          j--
        }
        array[j+1] = currentVal
      }
      return array
    }
    // console.log(insertionSort([3,1,5,4,2]))
    // console.log(insertionSort([2,1,9,76,4]))
    // console.log(insertionSort([-12,18,2,-94,1,23,5]))
//Time Complexity is roughly Quadratic O(n^2) because as the array grows we have to make n^2 number of comparisons
//Space Complexity 0(1)