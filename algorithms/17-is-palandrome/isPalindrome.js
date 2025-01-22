const isPalindrome = (str) => {
    // base case
    if(str.length <= 1) return true
    
    // check if the first and last letters are equal
    if(str[0] !== str[str.length - 1]) return false
    
    // recursive call
    return isPalindrome(str.slice(1, -1))
}

module.exports = isPalindrome