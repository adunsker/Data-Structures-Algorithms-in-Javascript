class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const zipperLists = (head1, head2) => {
//     let current1 = head1 // s // t
//     let current2 = head2 // 1 // 2
//     while(current1 !== null){
//         if(current2 === null){
//           return head1
//         }
//         const oldHead1Next = current1.next // t // null
//         const oldHead2Next = current2.next // 2 // 3
//         if(oldHead1Next === null){
//           return head1
//         }
//         current1.next = current2 // 
//         current2.next = oldHead1Next // 
//         current1 = oldHead1Next
//         current2 = oldHead2Next
//     }
//     return head1
// };

const zipperLists = (head1, head2) => {
  let current1 = head1 // s
  let current2 = head2 // 1
  let count = 1 // 2
  while(current1 !== null && current2 !== null){
    if(count % 2 == 0){
      const previous = current2.next
      current2.next = current1
      current2 = previous
    } else {
      const previous = current1.next
      current1.next = current2
      current1 = previous
    }
    count += 1
  }
  return head1
};

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(one, s);
// s -> 1 -> t -> 2 -> 3 -> 4