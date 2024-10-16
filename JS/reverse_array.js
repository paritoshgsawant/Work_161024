let a=[1,2,3,4,5]
let b = a.reverse()
console.log(b)

// reverse array still with original array shallow copy method 

var c =[1,2,3,4,5]
var newArr = c.concat().reverse()

console.log(c)
console.log(newArr)
