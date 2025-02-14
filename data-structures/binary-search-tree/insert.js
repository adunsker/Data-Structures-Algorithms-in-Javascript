class Node {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor(val) {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) this.root = newNode
        let current = this.root
        while (current !== null) {
            if (newNode > current) {
                current = current.right
            } else {
                current = current.left
            }
        }
        this.root = newNode
        return this
    }
}