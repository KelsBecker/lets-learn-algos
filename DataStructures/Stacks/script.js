//What is A Stack?
  //A stack is a LIFO (last in first out) Data Structure
  //Think of it like a stack of plates, the last one I stack on top, will be the first plate I remove
//Where are Stacks Used?
  //Managing Function Invocations (the call stack in javascript)
  //Undo and Redo, hitting command z to undo the last action, pops that actiion off a stack
  //Routing in front end frameworks (the history object in routing is often a stack)

//There is More than One Way to Implement a Stack
  //A stack is a concept, not all programming languages (javascript included) come with a built in stack DS

  //Simulate a stack with an Array

  const stackOfPenguins = ['Emporer']
  stackOfPenguins.push('King')
  stackOfPenguins.push('Fairy')
  stackOfPenguins.push('Rockhopper')

  //pop something off the stack
  console.log(stackOfPenguins.pop())

  //Use of an array to implement a stack is highly inefficient being as we have no need to have indices for a stack

  //Implementing a Stack from Scratch

  class Node {
    constructor(val){
      this.value = val;
      this.next = null; 
    }
  }

  class Stack {
    constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    //add a value to the stack
    push(val){
      let newValue = new Node(val)
      if(this.size === 0){
        this.first = newValue
        this.last = newValue
      } else {
        let newNext = this.first
        this.first = newValue
        newValue.next = newNext
      }
      this.size++
      return this
    }

    //LIFO remove the last item added to the stack
    pop(){
      if(this.size === 0) return null
      let poppedOff = this.first
      if(this.size === 1){
        this.first = null
        this.last = null
      } else {
        this.first = poppedOff.next
        poppedOff.next = null
      }
      this.size--
      return poppedOff
    }
  }

  let stack = new Stack()

  //Big O of Stacks
    // insertion and removal O(1) constant time 
      //We alway add to the front and remove from the front so no traversal is required
    // Searching and Accessing O(n)

