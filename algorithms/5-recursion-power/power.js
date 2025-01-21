const power = (num1, num2) => {
    // create a base case
    if(num2 === 1) return num1
    if(num2 === 0) return 1
    // recursive call
    return num1 * power(num1, num2 - 1)
}

module.exports = power