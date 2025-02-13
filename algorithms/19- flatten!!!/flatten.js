const flatten = (arr) => {
    // counter
    let counter = []

    // loop through array to check if an element is an array
    const helperFunction = (arr) => {
        let counterFunction = []

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (Array.isArray(element)) {
                // recursive call
                return helperFunction(element)
            } else {
                counterFunction.push(element)
            }
            if (index >= arr.length - 1) {
                return counterFunction
            }
        }
    }

    console.log(`return ${counter.concat(helperFunction(arr))}`)
    return [...helperFunction(arr)]
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

module.exports = flatten