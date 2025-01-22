const reverse = (str) => {
    // base case
    if(str.length <= 1) return str
    // recursive return
    return str.slice(-1) + reverse(str.slice(0, -1))
}

module.exports = reverse