Object methods



var a ={  //normal object
 name:"paritosh",
 surname:"sawant",
 age:"32",
 city:"pune",
 
 //array of object
  b : [1,2,3,4,5],
  
  //function of object
  c:function()
  { var a=10;
  var b=20;
   return a+b;
  },
  
  // function accessing object propetries and value
  
  d:function()
  {
  return this.name + " " + this.surname;  // if you access proprarties value into function so have to use this
  // key word
  }
 
}

document.write(a.name+ " " + a.surname +' '+ a.age + " " +a.city ,"<br><br>" )

document.write(a.b[0],a.b[1],a.b[2],a.b[3],a.b[4],"<br><br>" )

document.write(a.b,"<br><br>")

document.write(a.c(),"<br><br>")

document.write(a.d())