const collectStrings = (object) => {
    let arr = []
    
    const helper = (object) => {for(let val in object) {
        let entry = object[val]

        if(typeof entry === 'string') arr.push(entry)
        if(typeof entry === 'object') return helper(entry)
    }}

    helper(object)

    return arr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])