/* Singly Linked List
    Linked List: a data structure that consists of nodes, each node has a value
    and a pointer to another node or null
    Cannot be accessed randomly, must access the linked list via the Head
    Can be valuable for insertion and deletion because they are more performant than an array

    ** We will use ES 2015 class syntax to contstruct and access Data Structures
 */

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

//add a new value/node to the end of the singly linked list
  push(val){
    let newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return this;
  }

//remove the last node of the singly linked list
  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length = this.length -1;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

//remove the first node/head of the singly linked list
  shift(){
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }

//add a node to the beginning of the singly linked list
  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }

//access a node at a certain location
  get(index){
    if(index < 0 || index >= this.length) return null;
    let count = 1
    let current = this.head
    while(count <= index){
        current = current.next
        count++
    }
    return current
  }
  
//replace the value at a certain index
  set(index, val){
    let current = this.get(index)
    if(current){
      current.value = val
      return true
    } 
    return false;
  }

//insert a new node at an index
  insert(index, val){
    if(index < 0 || index > this.length){
      return false
    }
    if(index === this.length){
      this.push(val)
      return true
    } else if(index === 0){
      this.unshift(val)
      return true
    } else {
      let previous = this.get(index - 1)
      let newNode = new Node(val)
      let newNext = previous.next
      previous.next = newNode
      newNode.next = newNext
      this.length ++
      return true
    }
  }

//remove a node from a specific index
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length -1){
      this.pop()
    } else if(index === 0){
      this.shift()
    } else {
      let previous = this.get(index -1)
      let removed = previous.next
      previous.next = removed.next
      this.length--
      return removed
    }
  }

//reverse the linked list in place
  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this  
  }

}

let list = new SinglyLinkedList();
list.push(22)
list.push(18)
list.push('HI')
list.push('World!')
list.push('end')

//Big O 
  //Insertion: O(1) Constant Time. It doesn't matter how long the list is, insertion takes the same amount of time.
  //Removal: This depends where in the list the node to be removed is
    // Removal from the beginning is O(1)
    // Removal from the end is 0(n)...because we have to iterate through the list till we reach the second to last node
  //Searching and Accessing: O(n) the length of the list determines how long each search will take or how much needs to be iterated through to randomly access.

//Use Cases
//Linked Lists are an excellent alternative to arrays when frequent insertion or deletion from the beginning is needed
//The idea of data structure that consisist of nodes is a great foundation for other DS like queues and stacks