const flatten = (arr) => {
    // counter
    let counter = []
    // base case
    if(typeof arr[0] === 'number') {
        counter.push(arr[0])
        return counter
    }
    // helper function ???

    // recursive call
    return flatten().concat(flatten())
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

module.exports = flatten