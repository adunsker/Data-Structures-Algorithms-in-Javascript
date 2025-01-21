const sameFrequency = (num1, num2) => {
    // edge case
    if(num1.toString().length !== num2.toString().length) {
        return false
    }
    
    // create a counter
    const counter = {}

    // loop through the first number after turning it into a string and add the numbers to the counter
    for(const number of num1.toString()) {
        counter[number] = (counter[number] || 0) + 1
    }

    // turn num 2 into an array
    const num2String = num2.toString()

    // loop through the second number and check if a number is not in the counter
    for(const num of num2String) {
        if(!counter[num]) {
            return false
        } else {
            counter[num] -= 1
        }
    }

    return true
}

module.exports = sameFrequency