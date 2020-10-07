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

}


let list = new DoublyLinkedList()
list.push('FIRST!')
list.push('MIDDLE')
list.push('END!')
