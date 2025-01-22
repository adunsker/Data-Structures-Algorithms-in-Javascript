const findLongestSubstring = (str) => {
    let longest = 0
    let window = {}
    let left = 0
    let right = 0
    while(right < str.length) {
        const rightLetter = str[right]
        if(!window[rightLetter]) {
            window[rightLetter] = 1
            right++
            longest = Math.max(Object.keys(window).length, longest)
        } else {
            delete window[str[left]]
            left++
        }
    }
    return longest
}

module.exports = findLongestSubstring