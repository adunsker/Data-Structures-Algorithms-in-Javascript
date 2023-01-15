// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    let rev = []

    const helper = (str) => {
        if(str.length === 0) return
        rev.push(str[str.length - 1])
        helper(str.slice(0,str.length - 1)) 
    }

    helper(str)

    let newRev = rev.join("")
    if(str === newRev) return true
    return false
  }

  console.log(isPalindrome('tacoca'))