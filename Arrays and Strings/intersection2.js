const intersection = (a, b) => {
    let objA = {}
    let arr = []
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        objA[element] = 1
    }
    for (let i = 0; i < b.length; i++) {
        const element = b[i];
        if(element in objA) {
            arr.push(element)
        }
    }
    console.log(arr)
    return arr
};

intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]