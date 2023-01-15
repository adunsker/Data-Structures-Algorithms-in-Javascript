class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const isUnivalueList = (head) => {
    let current = head.next
    let firstNum = head.val
    while(current !== null) {
        if(firstNum !== current.val){
            console.log(false)
            return false
        }
        current = current.next
    }
    console.log(true)
    return true
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false