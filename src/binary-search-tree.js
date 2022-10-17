const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null
  }

  root() {
    return this.rootTree
  }

  add(data) {
    this.rootTree = addData(this.rootTree, data)

    function addData(node, data) {
      if(!node) {
        node = new Node(data)
      }
      if(node.data === data) {
        return node
      }
      if(node.data > data) {
        node.left = addData(node.left, data)
        
      } 
      else {
        node.right = addData(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return hasData(this.rootTree, data)

    function hasData(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (node.data > data) {
        return hasData(node.left, data)
      } else {
        return hasData(node.right, data)
      }
    }
  }

  find(data) {
    return findData(this.rootTree, data)

    function findData(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        return findData(node.left, data)
      } else {
        return findData(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootTree = removeData(this.rootTree, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) return;

    let node = this.rootTree;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) return;

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};