const pairSum = (numbers, targetSum) => {
    let i = 0
    let j = 0
    let previous = {}
    while (j < numbers.length) {
        let val = numbers[j]
        if(!(previous[val])){
            previous[val] = j
        }
        j++
    }
    while (i < numbers.length) {
        let lookFor = targetSum - numbers[i]
        if((previous[lookFor])){
            console.log([i , previous[lookFor]])
            return [i , previous[lookFor]]
        }
        i++
    }
}


pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]