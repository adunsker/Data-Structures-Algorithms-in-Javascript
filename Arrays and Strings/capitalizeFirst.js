// function capitalizeFirst (arr) {
//     let newArr = []
    
//     const helper = (arr) => {
//         if(arr.length <= 0) return
//         const theThing = actualCap(arr[0])
//         newArr.push(theThing)
//         helper(arr.slice(1))
//     }

//     const actualCap = (str) => {
//         return str[0].toUpperCase() + str.slice(1)
//     }
    
//     helper(arr)

//     return newArr
// }

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

function capitalizeFirst (arr) {
    if(arr.length <= 1) return [arr[0][0].toUpperCase() + arr[0].substring(1)]
    const res = capitalizeFirst(arr.slice(0,-1))
    const string = arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].substring(1)
    res.push(string)
    return res
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']