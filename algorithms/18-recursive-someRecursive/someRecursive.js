const isOdd = val => val % 2 !== 0;

const someRecursive = (arr, call) => {
    // base case
    if(arr.length === 0) return false

    if(call(arr[0]) === true) return true
    // recursive return
    return someRecursive(arr.slice(1), call)
}


// expect(someRecursive([4,6,8], isOdd)).toBe(false)
// expect(someRecursive([4,6,8], val => val > 10)).toBe(false)

module.exports = {someRecursive, isOdd}