class Node {
    constructor(val) {
        this.val = null
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(val) {
        this.rool = null
    }

    breadth(val) {
        let data = []
        let node = this.root
        function helper(node) {
            data.push(node)
            if (node.left) {
                helper(node.left)
            } else if (node.right) {
                helper(node.right)
            }
        }
        helper(node)
        return data
    }
}