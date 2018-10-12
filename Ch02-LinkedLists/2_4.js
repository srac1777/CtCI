
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


const partition = (head, x) => {
    let curr = head;
    let lp = [];
    let rp = [];

    while(curr.next !== null){
        if(curr.data < x){
            lp.push(curr);
        } else rp.push(curr);
        curr = curr.next;
    }

    if(lp.length === 0) {
        console.log("lp");
        
        return head;
    }
    if(rp.length === 0) {
        console.log("rp");

        return head;
    }

    console.log(lp);
    console.log(rp);

    for(let i= 0; i < lp.length - 1; i++){
        lp[i].next = lp[i+1];
    }

    for (let i = 0; i < rp.length - 1; i++) {
        rp[i].next = rp[i + 1];
    }

    lp[lp.length - 1].next = rp[0];
    rp[rp.length - 1].next = null;

    return lp[0];
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

console.log(partition(head, 5));
