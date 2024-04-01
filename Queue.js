class Queue {
    constructor() {
        this.items = [];
        this.head = 0; // Index of the first element
        this.tail = 0; // Index of the last element (next insertion point)
    }

    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.head];
        this.head++;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.head];
    }

    isEmpty() {
        return this.head === this.tail;
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.peek());    // Output: 20
console.log(queue.isEmpty()); // Output: false
