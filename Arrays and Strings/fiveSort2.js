const fiveSort = (nums) => {
    let fives = []
    let fin = []
    for(let i in nums){
        nums[i] === 5 
        ? i = i + nums.length + 1
        : fin.push(nums[i])
    }
    console.log(nums)
    return nums
};

fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 