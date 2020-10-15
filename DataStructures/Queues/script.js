//What is a Queue?
  // A Data structure that performs insertion and removal
  // Unlinke stacks...queues are FIFO First In First Out
//When are Queues Used
  // Background tasks on your computer
  // Uploading and downloding something (sometimes if it is multiple uploads they won't all start at the same time)
  // Printing/Task Processing

//Much like stacks, can be implemented via an array or made from scratch using class syntax

const queuedArray = []
queuedArray.push('First')
queuedArray.push('Second')
queuedArray.push('Third')

console.log(queuedArray.shift())

//Implementing a Queue from Scratch via class syntax
//Because we are using a singly linked list to implement a Queue 
//we want to add to the end and remove from the beginning

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

//add to the end of the queue
  enqueue(val){
    let queuedValue = new Node(val)
    if(!this.first){
      this.first = queuedValue
      this.last = queuedValue
    } else {
      this.last.next = queuedValue
      this.last = queuedValue
    }
    this.size++
    return queuedValue
  }

//remove from the beginning of the queue
  dequeue(){
    if(!this.first) return null
    let removed = this.first
    if(this.size === 1){
      this.first = null
      this.last = null 
    } else {
      this.first = removed.next
      removed.next = null
    }
    this.size--
    return removed
  }
}

let queue = new Queue() 
queue.enqueue('I Am First')
queue.enqueue('I Am Second')
queue.enqueue('I Am Third')

//Big O of Queues
  //Insertion and removal = O(1) constant
  //I wouldnt use a queue if I was worried about searching or retrieval but it would be O(n)