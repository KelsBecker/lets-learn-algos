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

//change the value of a given node
  set(index, val){
    let node = this.get(index)
    if(node){
      node.value = val
      return true
    }
    return false
  }

//insert a new node at a certain index
  insert(index,val){
    if(index < 0 || index >= this.length){
      return false;
    } else if(index === 0){
      this.unshift(val);
    } else if(index === this.length){
      this.push(val);
    } else {
      let previousNode = this.get(index - 1)
      let nextNode = previousNode.next
      let newNode = new Node(val)
      previousNode.next = newNode
      newNode.prev = previousNode
      newNode.next = nextNode
      nextNode.prev = newNode
    }
    this.length++
    return true
  }

  //remove a node from a certin index
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length -1){
      return this.pop()
    } else if (index === 0){
      return this.shift()
    } else {
      let nodeToRemove = this.get(index)
      let newCurrent = nodeToRemove.prev
      let newNext = nodeToRemove.next
      newCurrent.next = newNext
      newNext.prev = newCurrent
      nodeToRemove.prev = null
      nodeToRemove.next = null 
      this.length--
      return nodeToRemove
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
