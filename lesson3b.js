// Js functions
// Function is a block of code that performs a certian action/work
// The structure of the function is given as:
// Function keyword, name of the function, parethesis and the body of the function

function sayHello(){
    console.log("Hello there. Hope you are doing fine?")
}

//below we invoke/call our function
sayHello()

for (let i = 0; i <=3; i++){
    console.log(i)
    sayHello()
}
 // below is a function to add the numbers
 function addition(){
    let number1 = 10
    let number2 = 30

    let sum = number1 + number2
    console.log("The sum, of the number is: ", sum)

 }
 addition()

 console.log("================")

 // create a function is able to calc the simple interst gained given the  SI  gained given the principle 50000, rate as 7% time as 8 years

 function calculatesimpleinterst(){
    let principal = 50000
    let rate = 7 
    let time =8 
    let simpleinterest =(principal * rate * time)/100
    console.log("The simpleinterest: ", simpleinterest)
 }
 calculatesimpleinterst()