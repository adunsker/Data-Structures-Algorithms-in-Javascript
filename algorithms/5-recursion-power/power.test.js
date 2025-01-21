const power = require("./power")

test("Should return the product of the first number to the power of the second number recursively", () => {
    expect(power(2,0)).toBe(1)
    expect(power(2,2)).toBe(4)
    expect(power(2,4)).toBe(16)
})