const fiveSort = (nums) => {
    let fives = []
    let fin = []
    for(let i in nums){
        nums[i] === 5 ? fives.push(nums[i]) : fin.push(nums[i])
    }
    const concat = [...fin, ...fives]
    console.log(concat)
    return concat
};

fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 