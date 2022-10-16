const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  length = 0;
  
  root() {
    return this.rootElem || null;
  }

  add(data) {
    if (!this.length) {
      this.rootElem = new Node(data);
    } 

    else {
      let current = this.rootElem;
      while (true) {

        if (data > current.data) {
          if (!current.right) {
            current.right = new Node(data);
            break;
          }
          else {
            current = current.right;
          }
        }

        else if (data < current.data) {
          if (!current.left) {
            current.left = new Node(data);
            break
          }
          else current = current.left;
        }
        else break;
      }
    }

    this.length++;
  }

  has(data) {
    let current = this.rootElem;
    
    while(true) {
      if (data == current.data) return true;

      if (data < current.data) {
        if (!current.left) return false;
        current = current.left;
      }

      else {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootElem;
    
    while(true) {
      if (data == current.data) return current;

      if (data < current.data) {
        if (!current.left) return null;
        current = current.left;
      }

      else {
        if (!current.right) return null;
        current = current.right;
      }
    }
  }

  remove(data) {
    let current = this.rootElem;
    let parentNode;
    let nodeToRemove;
    let direction;

    if (current.data == data) {
      nodeToRemove = this.rootElem;
      
      if (!nodeToRemove.left && !nodeToRemove.right) {
        this.rootElem = null;
        this.length--;
        return;
      }

      if (nodeToRemove.left && !nodeToRemove.right) {
        this.rootElem = nodeToRemove.left;
        this.length--;
        return;
      }
        
      if (!nodeToRemove.left && nodeToRemove.right) {
        this.rootElem = nodeToRemove.right;
        this.length--;
        return;
      }

    }

    else {
      while(true) {

        if (data < current.data) {
          if (!current.left) return null;
          if (current.left.data == data) {
            parentNode = current;
            direction = 'left';
            nodeToRemove = current.left;
            break;
          }
          else current = current.left;
        }

        else {
          if (!current.right) return null;
          if (current.right.data == data) {
            parentNode = current;
            direction = 'right';
            nodeToRemove = current.right;
            break;
          }
          else current = current.right;
        }

      }
    }

    if (!nodeToRemove.left && !nodeToRemove.right) {
      parentNode[direction] = null
      this.length--;
      return;
    }

    if (nodeToRemove.left && !nodeToRemove.right) {
      parentNode[direction] = nodeToRemove.left;
      this.length--;
      return;
    }
      
    if (!nodeToRemove.left && nodeToRemove.right) {
      parentNode[direction] = nodeToRemove.right;
      this.length--;
      return;
    }

    let nodeToReplace = nodeToRemove.right;
    let parentNodeToReplace = nodeToRemove;
    while (true) {
      if (!nodeToReplace.left) break;
      parentNodeToReplace = nodeToReplace;
      nodeToReplace = nodeToReplace.left;
    }

    nodeToRemove.data = nodeToReplace.data;
    parentNodeToReplace.right = nodeToReplace.right;
  }

  min() {
    let current = this.rootElem;
    while(true) {
      if (current.left) current = current.left;
      else return current.data;
    }
  }

  max() {
    let current = this.rootElem;
    while(true) {
      if (current.right) current = current.right;
      else return current.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};