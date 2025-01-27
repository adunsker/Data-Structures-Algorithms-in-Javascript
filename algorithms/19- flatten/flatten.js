const flatten = (arr) => {
    // counter
    let counterFunction = []

    // loop through array to check if an element is an array
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (Array.isArray(element)) {
            // recursive call
            counterFunction.push(...flatten(element))
        } else {
            counterFunction.push(element)
        }
    }

    return counterFunction
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

module.exports = flatten