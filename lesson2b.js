// Conditional statements
// 1St if statement - It evaluates a condition and return an answer if the conditon is met
let age = 23

if (age < 18){
    console.log("The program is not suitable for you...")
}

console.log("==================")
// 2nd if..... else statement - it evaluates a condition and return a response if the condition is met otherwise the else block get executed
if(age < 18){
    console.log("The program is not suitable for you...")
}
else{
    console.log("Sit down, Relax and Enjoy....")
}

console.log("====================")
// create a program that evalutes 2 numbers i.e number1 and number2 and gives out the largest and the smallest of the numbers

let number1 = 7777
let number2 = 588

if (number1 > number2){
    console.log("Largest number is: ", number1)
    console.log("Smallest number is: ", number2)
}
else{
    console.log("Largest number is: ", number2)
    console.log("Smallest number is: ", number1)
}

number1 = 10
number2 =24

if(number1 > number2){
    console.log("number1 is largest while number2 is the smallest")
}
else{
    console.log("number2 " + number2 +"is the largest while number1"+ number1+ "is the smallest")
}