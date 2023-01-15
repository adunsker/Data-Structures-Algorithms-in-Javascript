class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
const insertNode = (head, value, index) => {
    let current = head
    let previous = undefined
    let i = 0
    const insertNode = new Node(value)
    if(i === index){
        insertNode.next = current
        return insertNode
    }
    while(current !== null) {
        if(i === index){
            previous.next = insertNode
            insertNode.next = current
            break
        }
        i++
        previous = current
        current = current.next
    }
    if(current === null) previous.next = insertNode
    return head
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'm', 4);
// a -> b -> c -> d -> m