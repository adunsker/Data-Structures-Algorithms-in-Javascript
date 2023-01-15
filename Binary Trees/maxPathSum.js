class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const maxPathSum = (root) => {
//     if(root.right === null && root.right) return root.val
//     const left = maxPathSum(root.left)
//     const right = maxPathSum(root.right)
//     if(root.left < root.right) return root.eft
//     return maxPathSum(root.left)
//   };

const maxPathSum = (root) => {
  if (root === null) return null;
  const right = maxPathSum(root.right)
  const left = maxPathSum(root.left)
  if(right > left) return root.val + right
  if(left > right) return root.val + left
  return null
};

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

maxPathSum(a); // -> 18