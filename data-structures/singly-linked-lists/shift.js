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

    shift() {
        if (this.length === 0) return undefined

        let oldHead = this.head

        if (!this.head.next) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }

        oldHead.next = null
        this.length--
        return oldHead
    }
}