const capitalizeFirst = require("./capitalizeFirst")

test("capitalizeFirst letter of each string in array", () => {
    expect(capitalizeFirst(["car", "taco", "banana"])).toEqual(["Car", "Taco", "Banana"])
})