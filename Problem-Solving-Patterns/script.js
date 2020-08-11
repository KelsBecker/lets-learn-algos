//Master Common Problem Solving Patterns
//Not a fix all but frequently a good place to start when coming up with a plan

// Frequency Counter
  // this uses objects or sets to collect values/count frequencies of values
  // comes in very handy when needing to check letters in strings or how many times a number occurs in values
  // or comparing two different values to find a common value or make sure all values match.
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
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

