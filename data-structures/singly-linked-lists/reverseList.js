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

    reverseList() {
        if (!this.head || this.length === 1) return false

        let prev = null
        let current = this.head
        this.tail = this.head

        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = current
        return true
    }
}