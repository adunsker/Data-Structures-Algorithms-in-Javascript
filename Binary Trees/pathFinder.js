class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  let stack = [ root ]
  const fin = []
  if(root === null) return null
  while(stack.length > 0) {
    const current = stack.pop()
    if(current.val === target) fin.push(current.val)
    if(current.left !== null) stack.push(current.left)
    if(current.right !== null) stack.push(current.right)
  }
  console.log(fin)
};

// const treeSum = (root) => {
//     const stack = [ root ]
//     let fin = 0
//     if(root === null) return fin
//     while(stack.length > 0){
//         const current = stack.pop()
//         fin += current.val
//         if(current.left !== null) stack.push(current.left)
//         if(current.right !== null) stack.push(current.right)
//     }
//     console.log(fin)
//     return fin
// };

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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]