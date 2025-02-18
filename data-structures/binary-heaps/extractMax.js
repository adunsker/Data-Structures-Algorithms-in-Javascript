class BinaryHeap {
    constructor() {
        this.val = [];
    }

    extractMax() {
        // Handle empty heap
        if (this.val.length === 0) return [];

        // Handle single element
        if (this.val.length === 1) return [];

        // Save the max value and move last item to root
        this.val[0] = this.val.pop();

        // If heap is now empty after pop, return empty array
        if (this.val.length === 0) return [];

        // bubble down
        let currentIndex = 0;

        while (true) {
            let leftChildIdx = 2 * currentIndex + 1;
            let rightChildIdx = 2 * currentIndex + 2;
            let largest = currentIndex;

            // Check if left child exists and is larger
            if (leftChildIdx < this.val.length && this.val[leftChildIdx] > this.val[largest]) {
                largest = leftChildIdx;
            }

            // Check if right child exists and is larger
            if (rightChildIdx < this.val.length && this.val[rightChildIdx] > this.val[largest]) {
                largest = rightChildIdx;
            }

            // If no swap is needed, break
            if (largest === currentIndex) break;

            // Swap with the largest child
            [this.val[currentIndex], this.val[largest]] = [this.val[largest], this.val[currentIndex]];
            currentIndex = largest;
        }

        return this.val;
    }
}