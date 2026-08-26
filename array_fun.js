// function displaystudent(student) {
//     console.log(student.name)
//     console.log(student.age)
//     console.log(student.grade)

// }
// let student1 = {
//     name: "nikhil gupta",
//     age: 20,    
//     grade: "A"
// }
// let student2 = {
//     name: "nishant pandey",
//     age: 22,
//     grade: "B"      
// }
// displaystudent(student1)
// displaystudent(student2)
// 
//  add = function(a,b)
//  {
//     console.log(a+b)
//  }
// let r = function(a,b)
//  {
//     console.log(a+b)
//  };
//  add(10,5);
                    //  arrow function is a function that is defined using the arrow syntax (=>) and does not have its own this, arguments, super, or new.target keywords. It is often used for shorter functions and callbacks.
//  const res =(a)=>{
//     console.log(a*a)
//  }
//  res(10);


//  callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

// function greet(name){
//     console.log("hello "+name)
// }   
// function processUserInput(callback){
    
//     callback("nikhil")
// }
// processUserInput(greet);
                            //   other example of callback function 




//   function calculate (num1,num2,callback){
//     let result = num1 + num2;
//     callback(result);
//   } 
//   function displayResult(result){
//     console.log("The result is: " + result);
//     }
//     calculate (10,20,displayResult);      
// setTimeout(function,delay);
// function -> code  you want to execute after the delay 



//  set Timeout Function is a built-in JavaScript function that allows you to execute a piece of code after a specified delay in milliseconds. It takes two arguments: the first is the function to be executed, and the second is the delay time in milliseconds.
// console.log("one") ;
// console.log("two") ;
// console.log("three") ;
// setTimeout(function()
// {  
//     console.log("hello after 50 seconds") ;
// },50000) ;


// console.log("four") ;
// console.log("five") ;
// console.log("six") ;
// console.log("seven") ;


// console.log("Hello") ;
// setTimeout(function()
// {  
//     console.log("Nikhil Gupta") ;
// },5000) ;

// other exaples

// function greet(f_name,lname){
//     console.log("Hello "+f_name+" "+lname)

// }
// setTimeout(greet,5000,"nikhil","gupta");


// function displayNumbers(numbers)
// {
//     console.log(numbers);
// }

// let arr=[12,20,30,45,50];
// displayNumbers(arr);


const fs = require('node:fs');
try{
    const content = 'this is written sychronously';
    fs.writeFileSync('output.txt',content,'utf8');
    console.log('file written successfully'); 
}  
catch(err){
    console.error(err);
}
