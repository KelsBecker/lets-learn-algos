//Doubly Linked List
  //Pretty much the same as a Singly Linked List except each node has a next and previous pointer
  // Head.previous will point to null
  // Tail.next will point to null

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0
  }

//add a node to the list
  push(val){
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

//remove last node
  pop(){
    if(!this.head) return undefined;
    let oldTail = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--
    return oldTail
  }

//remove a node from the beginning of linked list
  shift(){
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      let newHead = oldHead.next;
      this.head = newHead
      newHead.prev = null;
      oldHead.next = null;
    }
    this.length--
    return oldHead
  }

//add a node to the beginning 
  unshift(val){
    let newHead = new Node(val);
    if(!this.head){
      this.head = newHead;
      this.tail = newHead;
    } else {
      let oldHead = this.head
      this.head = newHead
      newHead.next = oldHead
      oldHead.prev = newHead
    } 
    this.length++
    return newHead
  }

//access a node at a given position
  get(index){
    if(index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2)
    let current;
    let count;
    if(index <= middle){
      count = 0
      current = this.head
      while(count != index){
        current = current.next
        count++
      }
      return current 
    } else {
      count = this.length -1
      current = this.tail
      while(count != index){
        current = current.prev
        count--
      }
      return current 
    }
  }

}


let list = new DoublyLinkedList()
list.push('FIRST!')
list.push(4)
list.push('SECOND')
list.push(22)
list.push('THIRD')
list.push(2020)
list.push('END!')
