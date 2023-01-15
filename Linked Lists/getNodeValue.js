class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const getNodeValue = (head, index) => {
    let current = head
    for (let i = 0; i <= index; i++) {
        if (i === index) {
            console.log(current.val)
        }
        if (current === null) {
            console.log(null)
        }
        current = current.next
    }
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'