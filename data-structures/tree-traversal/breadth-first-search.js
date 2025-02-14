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

    breadth() {
        let node = this.root
        let que = []
        let visited = []
        que.push(node)
        while (que.length) {
            node = que.shift()
            visited.push(node.val)
            if (node.left) que.push(node.left)
            if (node.right) que.push(node.right)
        }
        return visited
    }
}