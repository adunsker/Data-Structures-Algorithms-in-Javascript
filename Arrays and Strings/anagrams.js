const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) {
    console.log(false)
    return false
  }

  let count = {}

  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0
    }
    count[char] += 1
  }

  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i]
    if (!count[letter]) {
      console.log(false)
      return false
    } else {
      count[letter] -= 1
    }
  }

  console.log(true)
  return true
};

anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false
anagrams('monkeyswrite', 'newyorktimes'); // -> true
anagrams('paper', 'reapa'); // -> false
anagrams('elbow', 'below'); // -> true
anagrams('tax', 'taxi'); // -> false
anagrams('taxi', 'tax'); // -> false
anagrams('night', 'thing'); // -> true
anagrams('abbc', 'aabc'); // -> false
anagrams('po', 'popp'); // -> false
anagrams('pp', 'oo') // -> false