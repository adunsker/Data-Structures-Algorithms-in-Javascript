const maxValue = (nums) => {
    let largest = -Infinity
    let i = 0
    while(i < nums.length){
      if(nums[i] > largest) largest = nums[i]
      i++
    }
    return largest
  };

console.log(maxValue([4, 7, 2, 8, 10, 9]))
// -> 10