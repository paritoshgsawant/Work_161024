 function abc()
{
  var a="pari"
  var b="ripa"
  
 var c=a.split("").sort().join("")
 var d=b.split("").sort().join("")
 
 if(c===d)
 {
  console.log("true")
 }
 else{
 console.log("false")
 }
}
abc() 


===================================Not case sensetive==========================================


 function abc()
{
  var a="pari"
  var b="Ripa"
  
 var c=a.toLowerCase().split("").sort().join("")
 var d=b.toLowerCase().split("").sort().join("")
 
 if(c===d)
 {
  console.log("true")
 }
 else{
 console.log("false")
 }
}
abc() 





