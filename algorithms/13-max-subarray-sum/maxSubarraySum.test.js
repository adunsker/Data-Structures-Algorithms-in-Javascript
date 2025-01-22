const maxSubarraySum = require("./maxSubarraySum")

test("Check what the highest consecutive index sum is in an array", () => {
    expect(maxSubarraySum([100,200,300,400], 2)).toBe(700); // true
    expect(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)).toBe(39); // true
    expect(maxSubarraySum([-3,4,0,-2,6,-1], 2)).toBe(5); // true
    expect(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)).toBe(5); // false (order matters)
    expect(maxSubarraySum([2,3], 3)).toBe(null); // false (order matters)
})