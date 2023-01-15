class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
    if(head === null) return 0
    let maxStreak = 0
    let currentStreak = 0
    let currentNode = head
    let prevVal = null

    while(currentNode !== null) {
        if(currentNode.val == prevVal){
            currentStreak += 1
        } else {
            currentStreak = 1
        }

        if(currentStreak > maxStreak) maxStreak = currentStreak

        prevVal = currentNode.val
        currentNode = currentNode.next
    }

    console.log(maxStreak)
    return maxStreak
}

// const longestStreak = (head) => {
//     if(head === null) return 0
//     let current = head
//     let currentNum = head.val
//     let accumulator = 0
//     let lengths = []

//     while(current !== null) {
//         if(currentNum == current.val) {
//             accumulator += 1
//         } else {
//             lengths.push(accumulator)
//             accumulator = 1
//             currentNum = current.val
//         }
//         current = current.next
//     }

//     if(current === null) lengths.push(accumulator)

//     let longestStreak = 0

//     for(val in lengths){
//         if(lengths[val] > longestStreak) longestStreak = lengths[val]
//     }

//     console.log(longestStreak)
//     return longestStreak
// }

//   const a = new Node(9);
//   const b = new Node(9);
//   const c = new Node(1);
//   const d = new Node(9);
//   const e = new Node(9);
//   const f = new Node(9);
  
//   a.next = b;
//   b.next = c;
//   c.next = d;
//   d.next = e;
//   e.next = f;
  
//   // 9 -> 9 -> 1 -> 9 -> 9 -> 9
  
//   longestStreak(a); // 3

longestStreak(null); // 0