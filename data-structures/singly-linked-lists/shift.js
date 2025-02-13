class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = null
        this.tail = null
        this.length = 0
    }

    shift(val) {
        if (!this.head) return undefined
        let newHead = this.head
        this.head = newHead.next
        this.length--
        return newHead
    }
}