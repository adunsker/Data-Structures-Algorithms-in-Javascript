class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }  

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// const sumList = (head) => {
//     let current = head
//     let sum = 0
//     while(current !== null){
//         sum += current.val
//         current = current.next
//     }
//     console.log(sum)
//     return sum
//   };

const sumList = (head) => {
    let sum = 0
    sumListTwo(head, sum)
    return sum
}

const sumListTwo = (head, sum) => {
    if(head === null) return
    sum += head.val
    sumListTwo(head.next, sum)
  };

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19