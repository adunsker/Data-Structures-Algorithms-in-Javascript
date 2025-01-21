const isSubsequence = (str1, str2) => {
    let subsequence = ""
    let i = 0
    let j = 0
    // loop through the second string to find the next letter
    while(j < str2.length) {
        // push it into the subsequence tracker if it is a match
        if(str1[i] === str2[j]) {
            subsequence += str1[i]
            // move on to the next target letter
            i++
        }
        // if the are equal then return true
        if(subsequence === str1){
            return true
        }
        j++
    }
    return false
}

module.exports = isSubsequence