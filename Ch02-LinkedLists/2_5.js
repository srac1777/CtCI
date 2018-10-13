
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const sumLists = (h1, h2) => {
    let curr1 = h1;
    let curr2 = h2;
    let carry = 0;
    let result = new Node(null);
    let resp = result;

    if(curr1.data + curr2.data >9){
        carry = 1;
        let sum = curr1.data +curr2.data - 10;
        resp.data = sum;

    } else {
        resp.data = curr1.data + curr2.data;
    }

    curr1 = curr1.next;
    curr2 = curr2.next;
    // console.log(resp);

    while(curr1 !== null && curr2 !== null){
        let curr_sum = curr1.data + curr2.data + carry;

        if(curr_sum > 9){
            carry = 1;
            curr_sum -= 10;
            // if(result.data === null) resp = new Node(curr_sum);
             resp.next = new Node(curr_sum);
        } else {
            carry = 0;
            // if (result.data === null) resp = new Node(curr_sum);
             resp.next = new Node(curr_sum);
        }
        resp = resp.next;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    
    if(curr1 === null && curr2 !== null){
        addOne(resp, curr2, carry);
    } else if (curr1 !== null && curr2 == null){
        console.log(resp);
        addOne(resp, curr1, carry);
    } else if (carry === 1) resp.next = new Node(1);

    return result;

}

const addOne = (resp, curr, carry) => {
    let sum = 0;
    while(curr !== null){
        if(curr.data + carry > 9){
            carry = 1;
            sum = (curr.data + carry - 10);
        } else {
            sum = curr.data + carry;
            carry = 0;
        }
        resp.next = new Node(sum);
        curr = curr.next;
        resp = resp.next;
    }
    if(carry === 1) resp.next = new Node(1);
}

let h1 = new Node(9);

node2a = new Node(9);
h1.next = node2a;

node3a = new Node(9);
node2a.next = node3a;

let h2 = new Node(1);

// node2b = new Node(9);
// h2.next = node2b;

// node3b = new Node(2);
// node2b.next = node3b;

console.log(sumLists(h1,h2));

