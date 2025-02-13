const flatten = (arr) => {
    let result = []

    const helperFunction = (arr) => {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (Array.isArray(element)) {
                // recursively flatten nested arrays
                helperFunction(element)
            } else {
                result.push(element)
            }
        }
    }

    // Call helperFunction only once
    helperFunction(arr)
    return result
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

module.exports = flatten