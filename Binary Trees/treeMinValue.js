class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // const treeMinValue = (root) => {
  //     const stack = [ root ]
  //     let fin = Infinity
  //     while (stack.length > 0) {
  //       const current = stack.pop()
  //       if(current.val < fin) fin = current.val
  //       if(current.left !== null) stack.push(current.left)
  //       if(current.right !== null) stack.push(current.right)
  //     }
  //     console.log(fin)
  //     return fin
  // };

  const a = new Node(50);
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
  
  treeMinValue(a); // -> -2