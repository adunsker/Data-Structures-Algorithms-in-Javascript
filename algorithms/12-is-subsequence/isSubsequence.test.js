const isSubsequence = require("./isSubsequence")

test("Check if the first string has a subsequence inside of the second", () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true); // true
    expect(isSubsequence('sing', 'sting')).toBe(true); // true
    expect(isSubsequence('abc', 'abracadabra')).toBe(true); // true
    expect(isSubsequence('abc', 'acb')).toBe(false); // false (order matters)
})