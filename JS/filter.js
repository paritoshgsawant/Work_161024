let a =[1,2,3,4,5,6,7,8,4,3,5,6,3,1]

let b = a.filter((i,v)=>{
  return  a.indexOf(i)==v;
    
})
console.log(b)


// let b =a.filter(abc);

// function abc(i,v)
// {
//     return a.indexOf(i)==v;
// }
// console.log(b)