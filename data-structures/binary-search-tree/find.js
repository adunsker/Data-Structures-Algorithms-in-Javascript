class Node {
    constructor(val) {
        this.val = null
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor(val) {
        this.root = null
    }

    find(val) {
        if (!this.root) return false
        if (this.root.val === val) return this.root

        let current = this.root
        while (true) {
            if (current.val === val) {
                return current
            } else if (val > current.val) {
                if (!current.right) {
                    return undefined
                }
                current = current.right
            } else {
                if (!current.left) {
                    return undefined
                }
                current = current.left
            }
        }
    }

    find2(val) {
        if (!this.root) return false
        let current = this.root
        let found = false

        while (current && !found) {
            if (val > current.val) {
                current = current.right
            } else if (val < current.val) {
                current = current.left
            } else {
                found = true
            }
        }
        if (!found) return undefined
        return current
    }
}