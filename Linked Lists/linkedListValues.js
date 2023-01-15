class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;


const linkedListValues = (head) => {
    const fin = []
    while(head !== null){
        fin.push(head.val)
        head = head.next
    }
    console.log(fin)
    return fin
  };

// const linkedListValues = (head) => {
//     if(head == null) return fin
//     fin.push(head.val)
//     linkedListValues(head.next)
// }

  // a -> b -> c -> d
  
  linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]