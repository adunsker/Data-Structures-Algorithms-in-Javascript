const {someRecursive, isOdd} = require("./someRecursive")

test("", () => {
    expect(someRecursive([1,2,3,4], isOdd)).toBe(true)
    expect(someRecursive([4,6,8,9], isOdd)).toBe(true)
    expect(someRecursive([4,6,8], isOdd)).toBe(false)
    expect(someRecursive([4,6,8], val => val > 10)).toBe(false)
})