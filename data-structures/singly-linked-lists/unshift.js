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

    unshift(val) {
        const newNode = new Node(val)

        if (this.head) {
            const oldHead = this.head
            this.head = newNode
            this.head.next = oldHead
        } else {
            this.head = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }
}