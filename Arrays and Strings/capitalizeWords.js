function capitalizedWords (arr) {
    if(arr.length === 1) return [arr[0].toUpperCase()]
    let res = capitalizedWords(arr.slice(0,-1))
    let more = arr[arr.length - 1].toUpperCase()
    res.push(more)
    return res
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']