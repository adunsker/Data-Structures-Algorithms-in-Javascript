const countUniqueValues = (arr) => {
  // create 2 pointers
  let pointer1 = 0;
  let pointer2 = 1;

  // edge case length is 1 or less
  if (arr.length <= 1) {
    return 0;
  }

  // create a while loop to that ends when we reach the length of the array
  while (pointer2 <= arr.length - 1) {
    if (arr[pointer2] !== arr[pointer1]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
    pointer2++;
  }

  return pointer1 + 1;
};

module.exports = countUniqueValues;
