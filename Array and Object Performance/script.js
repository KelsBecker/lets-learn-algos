// Big O peformance with Arrays and Objects

// Objects:
  //Use when I don't need order
let person = {
  name: 'Kelly',
  hobby: 'biking',
  faveColor: 'green',
  hometown: 'NYC'
} 
// Insertion - O(1) constant time
person.lastName = 'Becker'
// Removal - O(1) constant time
delete person.faveColor
// Searching - O(n) linear time
  // Why? because it returns an array of each value in the object, so runtime depends on amount of values in the object
Object.values(person)
// Accessing - O(1) constant time
person.hobby

//Arrays
  //Use when order is required
const penguins = ['Rockhopper', 'Adelaide', 'Gentoo']
//Insertion:
  //Add to end O(1) constant time
  penguins.push('Chinstrap')
  //Add to begining O(n) linear time
    //Why? because the indecise of each item in the array have to change
  penguins.unshift('Emperor')
// Removal:
  // Remove from the end O(1) constant time
  penguins.pop()
  // Remove from the beginning O(n) linear time
    // Why? because each of the indices in the array will have to change
  penguins.shift()
// Access: O(1) constant time
  penguins[1]
//Searching: O(n) linear time
  penguins.filter(penguin => penguin.charAt(0) === 'A')
