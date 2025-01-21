const areThereDuplicates = (...args) => {
  // sort the array first
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  // create pointers
  let i = 0;
  // pointer search through args array
  for (let j = 1; j < args.length; j++) {
    if (args[i] == args[j]) {
      return true;
    }
    i++;
  }
  return false;
};

module.exports = areThereDuplicates;
