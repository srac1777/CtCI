class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
        this.parent = null;
    }
}

let root = new Node(5);
let three = new Node(3);
let four = new Node(4);
let fifteen = new Node(15);
let eight = new Node(8);
let six = new Node(6);
let one = new Node(1);
let two = new Node(2);
let seven = new Node(7);

root.left = three;
three.parent = root;
root.right = eight;
eight.parent = root;

three.left = four;
four.parent = three;
three.right = two;
two.parent = three;

two.left = one;
one.parent = two;
two.right = fifteen;
fifteen.parent = two;

eight.left = six;
six.parent = eight;
eight.right = seven;
seven.parent = eight;

const commonAncestor = (n1, n2) => {
    if(isChild(n1,n2)) return n1;
    if(isChild(n2,n1)) return n2;

    let cA = n1.parent;

    let goUp = (n1,n2) => {
        if(!n1) cA = null;
        if(n1.parent.left === n1){
            if(isChild(n1.parent.right,n2)) cA = n1.parent.right;
        }
        if(n1.parent.right === n1){
            if (isChild(n1.parent.left, n2)) cA = n1.parent.left;
        }

        goUp(n1.parent, n2);
    }

    goUp(n1,n2);
    return cA;
}

const isChild = (parent, child) => {
    let found = false;
    const dfs = (parent,target) => {
        if(!parent) return;
        if(parent === target) found = true;

        !found && parent.left && dfs(parent.left, target);
        !found && parent.right && dfs(parent.right, target);
    }
    dfs(parent, child);
    return found;
}

console.log(commonAncestor(four, five));

