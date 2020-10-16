//What is a Tree
  // a data structure consisting of nodes in a parent/child relationship
  // each parent can have one ore more children (think html)
  // top most node is the root
  // Trees are nonlinear, there can be and will be more than one pathway through a tree
//Terminology
  //Root: topmost node, there can only be one
  //Child: a node directly connected to another node (moving away from the root)
  //Parent: a child of one node can the the parent of another
  //Siblins: a grop of children connected to the same parent
  //Leaf: a node with no children
  //Edge: the connection betwee one node and another (often represented by an arrow connecting nodes)
//Real Life Uses of Trees
  //HTML DOM
  //Network Routing
  //Folder/File structure in an OS or project
  //JSON
//Kinds of Trees
  //Binary Search Trees
    //Each parent has max of 2 children (can have 0,1, or 2 children per node)
  //Binary Search Trees are a special type of Binary Trees
    //Are used to store data that can be compared
    //Can be any piece of data stored on a node (typically numbers)
    //Every node to the left of the parent node is always less than the parent
    //Every node to the right of the parent node is always greater than the parent


  class Node {
    constructor(val){
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor(){
      this.root = null;
    }

  //add a node to the tree
    insert(){

    }
  }

  let tree = new BinarySearchTree()
  tree.root = new Node(44)
  tree.root.left = new Node(22)
  tree.root.right = new Node(88)
  tree.root.left.right = new Node(24)

