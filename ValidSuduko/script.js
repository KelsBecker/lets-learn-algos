//input is a nxn matrix
//if matrix is 3x3 must contain unique values of 1-3 in each row and each column
//no negative numbers
//no empty arrays

let array = [
  [2,3,1],
  [1,2,3],
  [3,1,2]
]
// let array = [
//   [1,2,4,3],
//   [3,1,2,4],
//   [2,4,3,1],
//   [4,3,1,2]
// ]

function checkSubSudoku(array) {
  if(array.length <= 1 || typeof array !== "object") return 'INVALID'
  //put values of first array into an object as key value pairs
  let array1 = array[0]
  let obj = {}
  for(let i = 0; i < array1.length; i++){
    let num = array1[i]
    //validate that the numbers in the array are between 1 and then length of the array
    if(num < 1 || num > array.length) return 'INVALID'
    //break out of the operation if a valid number presents more than once
    if(obj[num]) return 'INVALID';
    obj[num] = 1
  }
  // check columns and rows for values in object
  //this needs fixing
  let index = 0
  let valueChecker = []
  while(index < array.length){
  let rowVals = {...obj}
    for(let i = 0; i < array[index].length; i++){
      if(rowVals[array[index][i]]){
        --rowVals[array[index][i]]
        valueChecker.push(true)

        let columnVals = {...obj}
        for(let j = 0; j < array.length; j++){
          if(columnVals[array[j][index]]){
            --columnVals[array[j][index]]
            valueChecker.push(true)
          }else{
            valueChecker.push(false)
          }
        }  
      }else{
        valueChecker.push(false)
      }
    }
    index++
  }
  console.log(valueChecker.length)
  //if all values are true aka unique and present in each row and column matrix is Valid
  if(valueChecker.every(value => value === true)){
      return 'VALID'
  } else {
      return 'INVALID'
  }
}
console.log(checkSubSudoku(array))