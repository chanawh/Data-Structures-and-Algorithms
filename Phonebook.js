class Node {
  constructor(name, phone_number) {
    this.name = name;
    this.phone_number = phone_number;
    this.left = null;
    this.right = null;
  }
}

class Phonebook {
  constructor() {
    this.root = null;
  }

  insertContact(name, phone_number) {
    const newNode = new Node(name, phone_number);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currentNode, newNode) {
    if (newNode.name < currentNode.name) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else if (newNode.name > currentNode.name) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    } else {
      // Handle duplicate name: Update phone number
      currentNode.phone_number = newNode.phone_number;
      console.log("Updated phone number for existing contact:", newNode.name);
    }
  }

  searchContact(name) {
    let current = this.root;
    while (current !== null) {
      if (name === current.name) {
        return current.phone_number;
      } else if (name < current.name) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null; // Contact not found
  }

  printPhonebook() {
    this.inOrderTraversal(this.root);
  }

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.name, "-", node.phone_number);
      this.inOrderTraversal(node.right);
    }
  }
}

// Usage Example (Ensure you provide both name and phone number)
const phonebook = new Phonebook();
phonebook.insertContact("Alice", "123-456-7890");
phonebook.insertContact("Bob", "987-654-3210");
phonebook.insertContact("Charlie", "555-123-4567");
phonebook.insertContact("Alice", "098-765-4321"); // Duplicate

const number = phonebook.searchContact("Bob");
console.log("Bob's number:", number); // Output: Bob's number: 987-654-3210

console.log("Phonebook:");
phonebook.printPhonebook();
// Output:
// Alice - 098-765-4321 (Updated phone number)
// Bob - 987-654-3210
// Charlie - 555-123-4567