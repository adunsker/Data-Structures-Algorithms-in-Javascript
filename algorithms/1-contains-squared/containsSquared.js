const containsSquared = (arr1, arr2) => {
  // create an empty object
  const counter = {};

  // we need to loop through the first array
  arr1.forEach((value, i) => {
    // square each value
    const squaredValue = value * value;
    // add a count that number's key if it exists or initiate to 1
    counter[squaredValue]
      ? ++counter[squaredValue]
      : counter[squaredValue] = 1;
  });

  // loop through second array and then remove the count from each number
  arr2.forEach((value, i) => {
    counter[value] ? --counter[value] : counter[value] = -1
  });

  // if any value is not equal to zero then return false else return true
  const counterFin = Object.values(counter)
  return counterFin.every(value => value == 0)
};

module.exports = containsSquared;
