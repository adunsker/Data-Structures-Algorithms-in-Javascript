const reverse = require("./reverse")

test("Recursively reverse ", () => {
    expect(reverse('awesome')).toBe('emosewa')
    expect(reverse('rithmschool')).toBe('loohcsmhtir')
})