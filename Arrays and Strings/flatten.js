function flatten(arr){
    let newArr = []

    const helper = (arr) => {
        if(arr.length === 0) return
        if(Array.isArray(arr[0]) === true) helper(arr[0])
        if(Array.isArray(arr[0]) === false) newArr.push(arr[0])
        helper(arr.slice(1))
    }

    helper(arr)

    return newArr
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3