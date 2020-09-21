/* Merging Arrays PseudoCode
  1. Create an empty array
  2. Look at the smallest values in each array (assumeing the are sorted lowest to highest start at the beginning
  3. While there are still values we haven't looked at
    1. If the value in the first array is less than the value in the second array
    2. push that value into our results array
    3. compare the next value in the first array to the value in the second array
    
    1. If the value in the second array is less than the value in the first array
    2. pust that value into our results array
    3. Move to the next value in second array and compare to value in first array
    
  4. Once we exhaust one array, push all remaining values into the result array*/ 

  function merge(array1, array2){
    let results = [];
    let i = 0
    let j = 0
    
    while(i < array1.length && j < array2.length){
      if(array1[i] < array2[j]){
        results.push(array1[i])
        i++
      } else {
        //this takes care of when array2[j] < array1[i] and when the numbers are equal
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
  // console.log(merge([1,9,16,45], [3,9,28,50,69,100]))