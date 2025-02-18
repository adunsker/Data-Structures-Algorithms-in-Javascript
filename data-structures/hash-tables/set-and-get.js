class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    hash(key) {
        let total = 0
        const WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let hash = this.hash(key)
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = []
        }
        this.keyMap[hash].push([key, value])
        return this
    }

    get(key) {
        let hash = this.hash(key)
        if (!this.keyMap[hash]) return undefined
        for (let i = 0; i < this.keyMap[hash].length; i++) {
            if (key === this.keyMap[hash][i][0]) return this.keyMap[hash][i]
        }
    }

    keys() {
        const list = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!list.includes(this.keyMap[i][j][0])) list.push(this.keyMap[i][j][0])
                }
            }
        }
        return list
    }

    values() {
        const list = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!list.includes(this.keyMap[i][j][1])) list.push(this.keyMap[i][j][1])
                }
            }
        }
        return list
    }
}