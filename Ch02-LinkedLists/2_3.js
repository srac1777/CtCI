
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const deleteMiddle = (head, node) => {
    let current = node; 
    while (current.next !== null){
        current.data = current.next.data;
        current = current.next;
    }
    current = null;
    return head;
}

let head = new Node(1);

node2 = new Node(5);
head.next = node2;

node3 = new Node(3);
node2.next = node3;

node4 = new Node(5);
node3.next = node4;

node5 = new Node(8);
node4.next = node5;

console.log(deleteMiddle(head, node2));