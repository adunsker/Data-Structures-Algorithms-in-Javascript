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

    pop() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            let temp = this.head
            this.tail = null
            this.head = null
            this.length--;
            return temp
        }

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = current
        this.tail.next = null
        this.length--
        return current
    }
}

// 1 2 3 4 5
// c
// t