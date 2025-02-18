class MaxBinaryHeap {
    constructor() {
        this.arr = []
    }

    insertHeap(val) {
        this.arr.push(val)
        let currentIndex = this.arr.length - 1

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2)

            if (this.arr[currentIndex] > this.arr[parentIndex]) break

            [this.arr[currentIndex], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[currentIndex]]
            currentIndex = parentIndex
        }

        return this.arr
    }
}
