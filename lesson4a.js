// Arrow functions
// This is a function that was introduced in the ECMA script 6 and give they give us the latest/mordern way of defining functions in a compact manner.
// At times the arrowfunctions can be said to be anonymous function why? Because they use the name of the variables they are contained in
// example:

const sayHello = () =>{
    console.log("This is an arrow function.")
}

sayHello()


console.log("========================")
// create for me an arrrow function of your own below
const greeting = () =>{
    console.log("Good morning! How are you doing...")
}

greeting()

// below is example 3
const product = () =>{
    let a = 45
    let b = 10
    let c = 16

    let answer = a * b * c
    console.log("The product of the number is: ", answer)
}
product()