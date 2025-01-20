const validAnagram = (str1, str2) => {
    // check that there are the same amount of characters
    if(str1.length !== str2.length) {
        return false
    }
    // init an empty counter object
    const counter = {}

    // loop through first string and add letters to object
    for(const letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1
    }
    // loop through second string
    for(const letter of str2) {
        // if the counter doesn't contain a letter return false
        // otherwise remove 1 from that count
        if(!counter[letter]) {
            return false
        } else {
            counter[letter] -= 1
        }
    }

    return true
}

module.exports = validAnagram