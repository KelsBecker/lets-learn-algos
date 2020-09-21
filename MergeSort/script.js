/* Start by Implementing a merge function for sorted arrays*/

function merge(array1, array2){
  let results = [];
  let i = 0
  let j = 0

  while(i < array1.length && j < array2.length){
    if(array1[i] < array2[j]){
      results.push(array1[i])
      i++
    } else {
      results.push(array2[j])
      j++
    }
  }
  while(i < array1.length){
    results.push(array1[i])
    i++
  }
  while(j < array2.length){
    results.push(array2[j])
    j++
  }
  return results
}

function mergeSort(array){
  if(array.length <= 1 ) return array;
    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid)) 
    return merge(right, left) 
}
console.log(mergeSort([2,100,300,40]))

/* Lets Break This Down
mergeSort([2,100,300,40])
array > 1
mid = 2
left = [2, 100] 
mergeSort([2,100]) 
array > 1
mid = 1
left = [2]
mergeSort[2]
array <= 1
return [2]
left has finished moves on to right
mergeSort([100])
array <= 1
return [100]
left and right have completed 
merge([2], [100]
merge returns [2,100]
At this point the very first call to mergeSort is at the top of the stack
the left side has been completed, now it has to finish the right side of the original mergeSort call
right = [300,40,20]
mergeSort([300,40])
array > 1
left = [300]
mergeSort([300])
array <= 1
return [300]
mergeSort([40])
array <= 1
return [40]
merge([300] [40])
merge returns ([40, 300])
original mergeSort finally has left and right values
merge([2,100], [40, 300])
merge returns [2,40,100,300]
*/

/* Big O
Time Complexity is O(n log n)
  depending on the length of the array the number of calculations to split it up grows by n
  for an 8 element array we have 3 splits (2 * 2 * 2) = 8
  for a 32 element array we have 5 splits (2 * 2 * 2 * 2 * 2)
  The merge portion is O(n) because the amount of comparisons directly correlates to the number of elements
  in the end mergeSort is O(n log n)
  O(n log n) is the best time complexity an agnostic sorting algo can be! 
Space Complexity is O(n)
  space is determined by the size of the array
*/