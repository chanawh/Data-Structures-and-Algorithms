class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  // In-order traversal: Visit left subtree, root, then right subtree
  inOrderTraversal(currentNode, callback) {
    if (currentNode !== null) {
      this.inOrderTraversal(currentNode.left, callback);
      callback(currentNode.data);
      this.inOrderTraversal(currentNode.right, callback);
    }
  }
}

// Example usage
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// This is a basic implementation and doesn't include functionalities like traversal or searching. You can extend it further based on your needs.
const inOrderValues = [];
tree.inOrderTraversal(tree.root, (data) => inOrderValues.push(data));
console.log("In-order traversal:", inOrderValues); // Output: [3, 5, 7, 10, 15]
