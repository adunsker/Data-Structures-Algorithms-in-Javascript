const recursiveRange = (num) => {
    // base case
    if(num === 0) return 0
    // recursive call
    return num + recursiveRange(num - 1)
}

module.exports = recursiveRange