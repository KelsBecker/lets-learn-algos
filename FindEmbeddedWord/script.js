/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

n = number of words in `words`
m = maximal string length of each word
*/

const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";

// const find_embedded_word = (wordArray, string) => {
//   wordArray.forEach((word) => {
//     let match = 0
//     console.log(word)
//     for(let i = 0; i <= word.length; i++){
//       console.log("->", word[i])
//       for(let j = 0; j <= string.length; j++){
//           console.log("-->", word[i], string[j])
//         if(word[i] === string[j]) {
//           match++
//           console.log("--> match increases!")
//         }
//           if(match === word.length) return word;
//           continue
//       }
//     }
//   })
//   return null
// }
// console.log(find_embedded_word(['tac'], string1))