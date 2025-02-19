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

    insert(val, index) {
        if (index > this.length || index < 0) return false
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)

        const newNode = new Node(val)
        let currentNode = this.head
        let currentIndex = 0
        while (currentIndex < this.length) {
            if (currentIndex + 1 === index) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                this.length++
                return true
            }
            currentNode = currentNode.next
            currentIndex++
        }
        return false
    }
}