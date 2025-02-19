class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    set(val, i) {
        if (!this.head || i >= this.length || i < 0) return false
        let current = this.head
        let currentIndex = 0
        while (currentIndex !== i) {
            current = current.next
            currentIndex++
        }
        current.val = val
        return true
    }
}