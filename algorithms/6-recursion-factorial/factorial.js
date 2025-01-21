const factorial = (num) => {
    // create a base case
    if(num === 1) return 1
    if(num === 0) return 1
    // recursive call
    return num * factorial(num - 1)
}

module.exports = factorial