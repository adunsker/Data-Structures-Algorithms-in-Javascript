class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const mergeLists = (head1, head2) => {
    let current1 = head1 // 5 -> 7
    let current2 = head2 // 6    6
    let head = new Node(null)
    let tail = head
    while(current1 !== null && current2 !== null){
        if(current1.val < current2.val){
            tail.next = current1
            current1 = current1.next           
        } else {
            tail.next = current2
            current2 = current2.next           
        }
        tail = tail.next
    }

    if(current1 !== null) tail.next = current1
    if(current2 !== null) tail.next = current2

    console.log(head.next)
    return head.next
  };

  const h = new Node(30);
  // 30
  
  const p = new Node(15);
  const q = new Node(67);
  p.next = q;
  // 15 -> 67
  
  mergeLists(h, p);
  // 15 -> 30 -> 67