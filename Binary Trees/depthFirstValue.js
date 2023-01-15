class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    const stack = [root]
    const fin = []

    if (root === null) return fin

    while (stack.length > 0) {
        const current = stack.pop();
        fin.push(current.val)
        if (current.right !== null) stack.push(current.right)
        if (current.left !== null) stack.push(current.left)
    }
    return fin
};

// depthFirstValues(null);
// //    -> []

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

depthFirstValues(a);
  //    -> ['a', 'b', 'd', 'e', 'c', 'f']