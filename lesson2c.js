// if ... else if ... else conditional statement
// This conditional statement is used in evaluating multiple conditions and if a condition is meet the execution of the programs stops

let age = 27

if(age < 15){
    console.log("You  are too young to watch this episode")
}
else if(age >= 15 && age <= 18){
    console.log("You can watch this episode with parental guidence")
}
else if(age > 18 && age < 40){
    console.log("Have a seat an enjoy the episode...")
}
else{
    console.log("This episode is not suitable for you..")
}

console.log("====================")
// come up with your own example of conditional statemet(if ... else if .. else) in javascript
let customerAge = 68
let tickectprice;

if(customerAge < 5){
    tickectprice = 0
    console.log("Ticket is free for chidren!")
}
else if(customerAge < 18){
    tickectprice = 500
    console.log("Student discount applied.")
}
else if(customerAge >= 50){
    tickectprice = 1000
    console.log("Adult price is 1000")
}
else{
    tickectprice = 1500
    console.log("Senior citizen applied")
}
// do the assignment on page 27 of the book 5

let distance = 760
let amountpaid;

if(distance >=0 && distance <= 100){
    amountpaid = 5
}
else if(distance >=101 && distance <= 500){
    amountpaid = 10
}
else if(distance >=501 && distance <=1000){
    amountpaid = 20
}
else if(distance >=1001){
    amountpaid = 40
}
else {
    console.log("Invalid entry")
    amountpaid =0
}

console.log("Distance traveled:", distance)
console.log("Amount to pay:", amountpaid)