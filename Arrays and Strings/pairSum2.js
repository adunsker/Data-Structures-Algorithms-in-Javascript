const pairSum = (numbers, targetSum) => {
    let previous = {}
    for(let i = 0; i < numbers.length; i++){
        let val = numbers[i]
        let lookFor = targetSum - numbers[i]
        if(lookFor in previous) {
            console.log([i , previous[lookFor]])
            return [i , previous[lookFor]]
        }           
        previous[val] = i
    }
}

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]