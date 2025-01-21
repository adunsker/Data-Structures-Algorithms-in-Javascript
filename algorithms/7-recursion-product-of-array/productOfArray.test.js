const productOfArray = require("./productOfArray")

test("Should return the product of the array", () => {
    expect(productOfArray([1,2,3])).toBe(6)
    expect(productOfArray([1,2,3,10])).toBe(60)
})