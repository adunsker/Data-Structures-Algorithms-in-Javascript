const factorial = require("./factorial")

test("Should return the the factorial of the number passed in", () => {
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(4)).toBe(24)
    expect(factorial(7)).toBe(5040)
})