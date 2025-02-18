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

    get(index) {
        if (!this.head) return undefined
        if (index >= this.length) return undefined
        if (index < 0) return undefined

        let current = this.head
        let currentIndex = 0
        while (currentIndex !== index) {
            current = current.next
            currentIndex++
        }
        return current
    }

    find(val) {
        if (!this.head) return undefined
        let current = this.head
        while (current) {
            if (current.val === val) break
            current = current.next
        }
        return current
    }
}