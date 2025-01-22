const maxSubarraySum = (arr, num) => {
  // edge case
  if (num > arr.length) return null;
  // create an accumulator & window
  let max = 0;
  for (let i = 0; i < num; i++) {
    // create a sliding window of the first num of numbers in the array
    max += arr[i];
  }

  let window = max;
  
  // iterate down the array while adding the next number and removing the first
  for (let i = num; i < arr.length; i++) {
    const current = arr[i];
    const remove = arr[i - num];
    // set window
    window = window - remove + current;
    // check if the new array is larger than the accumulator and if so replace the accumulator
    max = Math.max(max, window);
  }
  // return the accumulator
  return max;
};

module.exports = maxSubarraySum;
