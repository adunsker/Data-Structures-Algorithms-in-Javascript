const validAnagram = require("./validAnagram");

test("Testing if the two arrays contain the same characters", () => {
  expect(validAnagram("", "")).toBe(true);
  expect(validAnagram("aaz", "zza")).toBe(false);
  expect(validAnagram("anagram", "nagaram")).toBe(true);
  expect(validAnagram("rat", "car")).toBe(false);
  expect(validAnagram("awesome", "awesom")).toBe(false);
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
});
