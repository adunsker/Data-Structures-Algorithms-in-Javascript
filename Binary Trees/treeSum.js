class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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

const treeSum = (root) => {
  if(root === null) return 0
  const left = treeSum(root.left)
  const right = treeSum(root.right)
  console.log(root.val + left + right)
  return root.val + left + right
}
  
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
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
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21