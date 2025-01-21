const areThereDuplicates = require("./areThereDuplicates")

test("Check if there are any duplicate numbers in the array", () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false)
    expect(areThereDuplicates(1, 2, 2)).toBe(true)
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true)
})