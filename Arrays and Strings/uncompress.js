const uncompress = (s) => {
    let finalString = []
    let nums = '0123456789'
    let i = 0
    let j = 0
    while (j < s.length) {
        if (nums.includes(s[j])) {
            j += 1
        } else {
            const cut = s.slice(i, j);
            for (let k = 0; k < cut; k++) {
                finalString.push(s[j])
            }
            j++
            i = j
        }
    }
    console.log(finalString.join(''))
    return finalString.join('')
};

uncompress(uncompress("2c3a1t"))