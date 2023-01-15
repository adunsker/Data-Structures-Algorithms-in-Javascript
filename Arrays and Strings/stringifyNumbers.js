const stringifyNumbers = (object) => {
    const newObj = {}

    for(let val in object) {
        let entry = object[val]

        if(typeof entry === 'number') {
            newObj[val] = entry.toString()
        } else if(typeof entry === 'object'  && !Array.isArray(entry)) {
            newObj[val] = stringifyNumbers(entry)
        } else {
            newObj[val] = entry
        }
    }
    return newObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))