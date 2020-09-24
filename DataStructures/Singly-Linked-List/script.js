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
  
}



let list = new SinglyLinkedList();
list.push(22)
list.push(18)
list.push('HI')
list.push('World!')
list.push('end')