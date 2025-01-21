const productOfArray = (arr) => {
    // create a base case
    if(arr.length === 1) return arr[arr.length - 1]
    // edge case
    if(arr.length === 0) return 0
    // recursive call
    return arr * productOfArray(arr.splice(1))
}

module.exports = productOfArray