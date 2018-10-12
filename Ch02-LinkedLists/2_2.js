class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const kthfromlast = (head, k) => {
    let p1 = head;
    let p2 = head;

    let i = 0;
    while (i < k - 1){
        p2 = p2.next;
        i += 1
    }

    while(p2.next !== null){
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
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

console.log(kthfromlast(head, 3));
