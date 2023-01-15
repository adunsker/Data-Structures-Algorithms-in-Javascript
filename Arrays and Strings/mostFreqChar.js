const mostFreqChar = (s) => {
    let counter = {}
    for (let char of s) {
        if (!(counter[char])) {
            counter[char] = 1
        } else {
            counter[char] += 1
        }
    }
    let biggestNum = 0
    let fin = ''
    for (let char in counter) {
        if (counter[char] > biggestNum) {
            biggestNum = counter[char]
            fin = char
        }
    }
    // console.log(biggestNum)
    console.log(fin)
    return fin
}

mostFreqChar('bookeeper'); // -> 'e'
