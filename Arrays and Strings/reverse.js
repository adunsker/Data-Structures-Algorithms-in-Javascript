function reverse(str){
    let arr = []

    function helper(str) {
        if(str.length === 0) return
        arr.push(str[str.length - 1])
        helper(str.slice(0,str.length-1))
    }

    helper(str)
    return arr.join('')
}



console.log(reverse('happy'))