class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bottomRightValue = (root) => {
    if (root === null) return;
    const que = [root]
    let fin = 0

    while (que.length > 0) {
        const current = que.shift();
        fin = current
        if (current.left !== null) que.push(current.left)
        if (current.right !== null) que.push(current.right)
    }
    return fin.last
};


const treeSum = (root) => {
    if (root === null) return 0;

    const queue = [root];
    let totalSum = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        totalSum += node.val;
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

    return totalSum;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

bottomRightValue(a); // -> 1