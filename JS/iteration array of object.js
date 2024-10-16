var student = [

{name:"abc",age: "15"},
 {name:"abc",age:"01"}, 

{name:"abc",age:"20"},
{name:"abc",age:"18"},
{name:"abc",age:"20"}, 


];

// by using for loop

/*  for(var i=0;i<student.length;i++)
 {
 document.write(student[i].name+" "+ student[i].age +"<br>")
 
 }  */

// by using map fucntion 

student.map((item,key)=>{



document.write(item.name,item.age + "<br> " );

})