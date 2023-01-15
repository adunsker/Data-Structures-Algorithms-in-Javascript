class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
    if(head.val === targetVal) return head.next

    let current = head 
    let previous = null
    while(current != null){
        if(current.val === targetVal){
            previous.next = current.next
            break
        }
        previous = current
        current = current.next
    }
    return head
};

// const removeNode = (head, targetVal) => {
//     let current = head 
//     let dummyHead = null
//     let previous = null
//     while(current != null){
//         if(current.val === targetVal){
//             dummyHead = current.next
//             if(previous != null) {
//                 previous.next = dummyHead
//                 console.log(head)
//                 return head
//             } else {
//                 console.log(dummyHead)
//                 return dummyHead
//             }
//         }
//         previous = current
//         current = current.next
//     }
// };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

removeNode(a, "c");
// a -> b -> d -> e -> f

// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");

// q.next = r;
// r.next = s;

// // q -> r -> s

// removeNode(q, "q");
// // r -> s