
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const removeDups = head => {
    let seen = new Set();
    let curr = head;

    while(curr.next !== null){
        if(seen.has(curr.data)){
            deleteNode(curr,head);
        } else seen.add(curr.data);
        curr = curr.next;
    }

    return head;
}

const deleteNode = (curr, head) => {
    // console.log(curr);
    // console.log(head);
    
    
    let prev = head;
    let now = head.next;

    if(now === curr) {
        prev.next = curr.next;
    } else {
        while(now !== curr) {
            prev = prev.next;
            now = now.next;
        }
    }
    prev.next = now.next;
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

console.log(removeDups(head));

