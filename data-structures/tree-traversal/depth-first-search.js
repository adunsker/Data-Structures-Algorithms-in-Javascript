class Node {
    constructor(val) {
        this.val = null
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(val) {
        this.root = null
    }

    depth(val) {
        let data = []
        function helper(node) {
            data.push(node.val)
            if (node.left) {
                helper(node.left)
            } else if (node.right) {
                helper(node.right)
            }
        }
        helper(this.root)
        return data
    }
}
