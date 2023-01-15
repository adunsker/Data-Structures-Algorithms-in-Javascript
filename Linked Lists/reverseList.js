class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverseList = (head) => {
    let current = head
    let previous = null
    while (current !== null) {
        let next = current.next
        current.next = previous
        previous = current
        current = next
        // current = next
    }
    current = previous
    while (current !== null) {
        console.log(current.val)
        current = current.next
    }
};

// const reverseWork = (head) => {
//     let current = head
//     while(current !== null){
//         const previous = current
//         current = current.next
//         let next = current.next
//         current.next = previous
//         current = next
//     }
// }

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

reverseList(a); // f -> e -> d -> c -> b -> a