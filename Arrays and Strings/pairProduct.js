const pairProduct = (numbers, targetProduct) => {
    let previous = {}
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]; 
        let lookFor = targetProduct / element
        if(lookFor in previous){
            console.log([i, previous[lookFor]])
            return [i, previous[lookFor]]
        }
        previous[element] = i
    }
};

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]