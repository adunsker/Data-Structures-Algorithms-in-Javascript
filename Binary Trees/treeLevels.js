class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeLevels = (root) => {
    const que = [root]
    let levels = []
    let current = null;
    while (que.length > 0) {
        current = que.pop();
        levels.push([current.val]);
        if (root.left != null) que.push(root.left)
        if (root.right != null) que.push(root.right)
        current = que[que.length]
    }
    console.log(levels)
};


const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]