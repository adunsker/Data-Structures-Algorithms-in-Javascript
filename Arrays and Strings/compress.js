const compress = (s) => {
    let result = []
    let i = 0
    let j = 0
    let count = 0
    while (j <= s.length) {
        if (s[j] !== s[i]) {
            if (count > 1) {
                result.push(count);
            }
            result.push(s[i]);
            count = 1
            i = j
        } else {
            count += 1
        }
        j++
    }
    let fin = result.join('')
    console.log(fin)
    return fin
}

compress('ccaaatsss'); // -> '2c3at3s'