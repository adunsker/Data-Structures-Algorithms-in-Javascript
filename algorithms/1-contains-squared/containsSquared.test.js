const containsSquared = require("./containsSquared");

test("the second array contains all of the first array values squared", () => {
  expect(containsSquared([1, 2, 3], [4, 1, 9])).toBe(true);
  expect(containsSquared([1, 2, 3], [1, 9])).toBe(false);
  expect(containsSquared([1, 2, 3], [4, 4, 1])).toBe(false);
});