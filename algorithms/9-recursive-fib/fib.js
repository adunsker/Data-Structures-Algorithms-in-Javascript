const fib = (num) => {
    // base cases
    if(num <= 2) return 1
    // recursive case: sum of previous two numbers
    return fib(num - 1) + fib(num - 2)
}

module.exports = fib