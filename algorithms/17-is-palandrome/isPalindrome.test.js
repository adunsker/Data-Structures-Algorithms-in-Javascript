const isPalindrome = require("./isPalindrome");

test("should be a palandrome", () => {
  expect(isPalindrome("awesome")).toBe(false);
  expect(isPalindrome("foobar")).toBe(false);
  expect(isPalindrome("tacocat")).toBe(true);
  expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
  expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
});
