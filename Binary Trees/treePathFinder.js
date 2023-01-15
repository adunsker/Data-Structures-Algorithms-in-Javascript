// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
    if (root === null) return null
    if (root === target) return [root.val]

    const left = pathFinder(root.left, target)
    if (left.val !== null) return [root.val, ...leftPath]

    const right = pathFinder(root.right, target)
    if (right.val !== null) return [root.val, ...rightPath]

    return null
};

module.exports = {
    pathFinder,
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

pathFinder(a, "c"); // -> ['a', 'c']